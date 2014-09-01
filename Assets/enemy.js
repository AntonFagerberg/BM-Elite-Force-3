#pragma strict

function Start () {

}

function Update () {
	transform.position.y -= 1 * Time.deltaTime;
	
	if (transform.childCount == 0) {
		Destroy(gameObject);
	} 
}