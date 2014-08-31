#pragma strict

var x = 0.0;
var y = 0.0;
var xSpeed = 30;
var ySpeed = 15;
var xScreenLimit = 33.5;
var smooth = 0.1;
var tiltAngle = 0.0;
var bullet: Transform;
var bulletSide = 1;
var waitTime = 0.0;

function Start () {

}

function Update () {
	if (Input.GetKey(KeyCode.LeftArrow)) {
		x -= xSpeed * Time.deltaTime;
		tiltAngle = 30;
	} else if (Input.GetKey(KeyCode.RightArrow)) {
		x += xSpeed * Time.deltaTime;
		tiltAngle = -30;
	} else {
		tiltAngle = 0;
	}
	
	if (Input.GetKey(KeyCode.UpArrow)) {
		y += ySpeed * Time.deltaTime;
	} else if (Input.GetKey(KeyCode.DownArrow)) {
		y -= ySpeed * Time.deltaTime;
	}
	
	if (waitTime < 0) {
		waitTime = 0;
	}
	
	if (waitTime == 0 && Input.GetKey(KeyCode.Space)) {
		var bullet: Transform = Instantiate(bullet);
		bullet.position = Vector3(x + bulletSide * 1.1, y + 1.85, 0);
		bulletSide = -bulletSide;
		waitTime = 0.03;
	}
	
	waitTime -= Time.deltaTime;
	var target = Quaternion.Euler (0, tiltAngle, 0);
	transform.rotation = Quaternion.Slerp(transform.rotation, target, Time.deltaTime * smooth);
	transform.position = Vector3(x, y, 0);
}