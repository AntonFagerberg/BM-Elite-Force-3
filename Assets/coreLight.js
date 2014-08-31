#pragma strict

private var intensity = 0.0;
private var direction = 1.0;
var intensitySpeed: float;

function Start () {

}

function Update () {
	if (intensity >= 1) {
		intensity = 1;
		direction = -direction;
	} else if (intensity <= 0) {
		intensity = 0;
		direction = -direction;
	}
	
	intensity += direction * intensitySpeed * Time.deltaTime;
	light.intensity = intensity;
}