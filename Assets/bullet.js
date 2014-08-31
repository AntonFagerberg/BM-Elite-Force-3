#pragma strict

private var rotationSpeed = 200.0;
private var y: float;
var speed: float;


function Start () {
	y = transform.position.y;
}

function Update () {
	y += speed * Time.deltaTime;
	transform.position = Vector3(transform.position.x, y, 0);
	transform.Rotate(Vector3.up * rotationSpeed * Time.deltaTime);
	
	if (y > 30) {
		Destroy(gameObject);
	}
}