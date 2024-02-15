bool lastState = false;

void setup() {
  pinMode(0, INPUT_PULLUP);
  pinMode(1, INPUT_PULLUP);
  pinMode(2, INPUT_PULLUP);
  pinMode(3, INPUT_PULLUP);
  pinMode(4, INPUT_PULLUP);
  pinMode(5, INPUT_PULLUP);
  pinMode(6, INPUT_PULLUP);
  pinMode(7, INPUT_PULLUP);
  pinMode(8, INPUT_PULLUP);
  pinMode(9, INPUT_PULLUP);
  pinMode(10, INPUT_PULLUP);
  pinMode(11, INPUT_PULLUP);
  pinMode(12, INPUT_PULLUP);
  pinMode(13, OUTPUT);
  pinMode(27, INPUT_PULLUP);
  pinMode(28, INPUT_PULLUP);
  pinMode(29, INPUT_PULLUP);
  pinMode(30, INPUT_PULLUP);
  pinMode(31, INPUT_PULLUP);
  pinMode(32, INPUT_PULLUP);
  pinMode(33, INPUT_PULLUP);
  pinMode(34, INPUT_PULLUP);
  pinMode(35, INPUT_PULLUP);
  pinMode(36, INPUT_PULLUP);
  pinMode(37, INPUT_PULLUP);
  pinMode(38, INPUT_PULLUP);
  pinMode(49, INPUT_PULLUP);
  pinMode(51, INPUT_PULLUP);
  pinMode(52, INPUT_PULLUP);
  pinMode(54, INPUT_PULLUP);

  digitalWrite(13, HIGH);

  Serial.begin(9600);
}

void loop() {
  if(digitalRead(32)==lastState){
    delay(50);
    lastState != digitalRead(32);
  }


  String serial =
  String(digitalRead(0))+","+
  String(digitalRead(1))+","+
  String(digitalRead(2))+","+
  String(digitalRead(3))+","+
  String(digitalRead(4))+","+
  String(digitalRead(5))+","+
  String(digitalRead(6))+","+
  String(digitalRead(7))+","+
  String(digitalRead(8))+","+
  String(digitalRead(9))+","+
  String(digitalRead(10))+","+
  String(digitalRead(11))+","+
  String(digitalRead(12))+","+
  //String(digitalRead(13))+","+
  String(digitalRead(27))+","+
  String(digitalRead(28))+","+
  String(digitalRead(29))+","+
  String(digitalRead(30))+","+
  String(digitalRead(31))+","+
  String(digitalRead(32))+","+
  String(digitalRead(33))+","+
  String(digitalRead(34))+","+
  String(digitalRead(35))+","+
  String(digitalRead(36))+","+
  String(digitalRead(37))+","+
  String(digitalRead(38))+","+
  String(digitalRead(49))+","+
  String(digitalRead(51))+","+
  String(digitalRead(52))+","+
  String(digitalRead(54))+","+
  String(analogRead(0)) +","+
  String(analogRead(1))+","+
  String(analogRead(2))+","+
  String(analogRead(3))+","+
  String(analogRead(4))+","+
  String(analogRead(5))+","+
  String(analogRead(6))+","+
  String(analogRead(7))+","+
  String(analogRead(8))+","+
  String(analogRead(9))+","+
  String(analogRead(10))+","+
  String(analogRead(11))+","+
  String(analogRead(12))+","+
  String(analogRead(15))+","+
  String(analogRead(16))+","+
  String(analogRead(17));

  Serial.println(serial);

  delay(100);
}
