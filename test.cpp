#include <Arduino.h>

// Pin definitions
#define CS_PIN 2    // Chip Select
#define SCK_PIN 3   // Serial Clock
#define MOSI_PIN 4  // Master Out Slave In
#define MISO_PIN 5  // Master In Slave Out

// Function prototypes
void setup_pins(void);
void send_byte(uint8_t data);
uint8_t receive_byte(void);
void select_chip(void);
void deselect_chip(void);
void write_enable(void);
void write_disable(void);
void write_byte(uint8_t address, uint8_t data);
uint8_t read_byte(uint8_t address);
void erase_all(void);
void print_menu(void);
void handle_menu_choice(char choice);


// Initializes serial communication at 9600 baud.
// Sets up the pin modes.
// Prints the menu to the serial monitor.
void setup() {
  Serial.begin(9600);
  setup_pins();
  print_menu();
}

// Continuously checks if there is data available on the Serial port.
// Reads the user's choice and calls handle_menu_choice() to process it.
// Prints the menu again for the next input.
void loop() {
  if (Serial.available() > 0) {
    char choice = Serial.read();
    handle_menu_choice(choice);
    print_menu();
  }
}

// Configures the pins as inputs or outputs as required for communication.
// Sets initial states for the pins.
// I think it's just set to low because of the second comment (they want us to manually create the SPI statements)
void setup_pins(void) {
  pinMode(CS_PIN, OUTPUT);
  pinMode(SCK_PIN, OUTPUT);
  pinMode(MOSI_PIN, OUTPUT);
  pinMode(MISO_PIN, INPUT);
  
  digitalWrite(CS_PIN, HIGH);
  digitalWrite(SCK_PIN, LOW);
  digitalWrite(MOSI_PIN, LOW);
}

// send_byte(uint8_t data): Sends a byte of data to the EEPROM by setting the MOSI pin and toggling the SCK pin.
// receive_byte(void): Reads a byte of data from the EEPROM by toggling the SCK pin and reading the MISO pin.
void send_byte(uint8_t data) {
  for (int i = 7; i >= 0; i--) {
    digitalWrite(MOSI_PIN, (data >> i) & 1);
    digitalWrite(SCK_PIN, HIGH);
    digitalWrite(SCK_PIN, LOW);
  }
}

uint8_t receive_byte(void) {
  uint8_t data = 0;
  for (int i = 7; i >= 0; i--) {
    digitalWrite(SCK_PIN, HIGH);
    data |= (digitalRead(MISO_PIN) << i);
    digitalWrite(SCK_PIN, LOW);
  }
  return data;
}

// select_chip(void): Activates the EEPROM by setting the CS pin low.
// deselect_chip(void): Deactivates the EEPROM by setting the CS pin high.
void select_chip(void) {
  digitalWrite(CS_PIN, LOW);
}

void deselect_chip(void) {
  digitalWrite(CS_PIN, HIGH);
}

// write_enable(void): Enables writing to the EEPROM by sending the EWEN command.
// write_disable(void): Disables writing to the EEPROM by sending the EWDS command.
// write_byte(uint8_t address, uint8_t data): Writes a byte of data to the specified address after enabling write operations.
// read_byte(uint8_t address): Reads a byte of data from the specified address.
void write_enable(void) {
  select_chip();
  send_byte(0b10011000);  // EWEN command
  deselect_chip();
}

void write_disable(void) {
  select_chip();
  send_byte(0b10000000);  // EWDS command
  deselect_chip();
}

void write_byte(uint8_t address, uint8_t data) {
  write_enable();
  select_chip();
  send_byte(0b10100000 | (address & 0x7F));  // WRITE command + address
  send_byte(data);
  deselect_chip();
  delay(10);  // Wait for write to complete
}

uint8_t read_byte(uint8_t address) {
  select_chip();
  send_byte(0b10000000 | (address & 0x7F));  // READ command + address
  uint8_t data = receive_byte();
  deselect_chip();
  return data;
}

// erase_all(void): Erases all data in the EEPROM by sending the ERAL command.
// write_pattern(uint8_t start_addr, uint8_t *data, uint8_t len): Writes a sequence of bytes starting from a given address.
// erase_addresses(uint8_t *addresses, uint8_t len): Sends erase commands to specific addresses (with dummy data, as the actual erase command might not require address information).
void erase_all(void) {
  write_enable();
  select_chip();
  send_byte(0b10010000);  // ERAL command
  deselect_chip();
  delay(10);  // Wait for erase to complete
}

void write_pattern(uint8_t start_addr, uint8_t *data, uint8_t len) {
  write_enable();
  select_chip();
  send_byte(0b10100000 | (start_addr & 0x7F));  // WRITE command + start address
  for (uint8_t i = 0; i < len; i++) {
    send_byte(data[i]);
  }
  deselect_chip();
  delay(10);  // Wait for write to complete
}

void erase_addresses(uint8_t *addresses, uint8_t len) {
  write_enable();
  for (uint8_t i = 0; i < len; i++) {
    select_chip();
    send_byte(0b10000000 | (addresses[i] & 0x7F));  // READ command + address
    send_byte(0xFF); // Writing a dummy value, the address is not actually used in the EEPROM's erase command
    deselect_chip();
    delay(10);  // Wait for erase to complete
  }
}

// print_menu(void): Displays a menu of options on the Serial Monitor.
// handle_menu_choice(char choice): Processes user input based on the menu choice. Performs EEPROM operations such as dumping data, enabling/disabling writes, writing data, erasing, etc.
void print_menu(void) {
  Serial.println("\n93C46 Test Menu");
  Serial.println("1 - Dump NVRAM");
  Serial.println("2 - EWEN Write Enable");
  Serial.println("3 - EWDS Write Disable");
  Serial.println("4 - WRAL 0xA5");
  Serial.println("5 - ERAL Erase ALL");
  Serial.println("6 - Write 0:12,34,56,78,9A,BC,DE,FA");
  Serial.println("7 - Write 0:22,44,66,88,AA,BB,CC,DD");
  Serial.println("8 - Erase 0,3,4,7");
  Serial.println("9 - Write sequential numbers");
  Serial.println("Enter choice: ");
}

void handle_menu_choice(char choice) {
  uint8_t address, data;
  
  switch(choice) {
    case '1':
      Serial.println("Dumping NVRAM:");
      for(int i = 0; i < 128; i++) {
        if(i % 16 == 0) Serial.println();
        Serial.print(read_byte(i), HEX);
        Serial.print(" ");
      }
      Serial.println();
      break;
    
    case '2':
      write_enable();
      Serial.println("Write Enable");
      break;

    case '3':
      write_disable();
      Serial.println("Write Disable");
      break;

    case '4':
      write_enable();
      select_chip();
      send_byte(0b10100000 | (0x00 & 0x7F));  // WRITE command + address 0
      send_byte(0xA5);
      deselect_chip();
      Serial.println("WRAL 0xA5");
      break;

    case '5':
      erase_all();
      Serial.println("Erase All");
      break;

    case '6': {
      uint8_t data[] = {0x12, 0x34, 0x56, 0x78, 0x9A, 0xBC, 0xDE, 0xFA};
      write_pattern(0x00, data, sizeof(data));
      Serial.println("Write pattern 0:12,34,56,78,9A,BC,DE,FA");
      break;
    }
    
    case '7': {
      uint8_t data[] = {0x22, 0x44, 0x66, 0x88, 0xAA, 0xBB, 0xCC, 0xDD};
      write_pattern(0x00, data, sizeof(data));
      Serial.println("Write pattern 0:22,44,66,88,AA,BB,CC,DD");
      break;
    }
    
    case '8': {
      uint8_t addresses[] = {0, 3, 4, 7};
      erase_addresses(addresses, sizeof(addresses));
      Serial.println("Erase addresses 0, 3, 4, 7");
      break;
    }
    
    case '9': {
      for (int i = 0; i < 128; i++) {
        write_byte(i, i);
      }
      Serial.println("Write sequential numbers");
      break;
    }
    
    default:
      Serial.println("Invalid choice");
  }
}