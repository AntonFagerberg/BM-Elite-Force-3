#pragma strict

private var exploded = false;
private var explosionSpeed = 50.0;
private var aliveTime = 25.0;

function Start () {

}

function Update () {
	if (exploded) {
		transform.position += -transform.forward * explosionSpeed * Time.deltaTime;
		aliveTime -= Time.deltaTime;
		if (aliveTime < 0) {
			Destroy(gameObject);
		}
	}
}

function OnTriggerEnter(other : Collider) {
	if (other.gameObject.CompareTag("Bullet")) {
		Destroy(other.gameObject);
		
		
		//Debug.Log(parent.gameObject.transforms);
		
	    for (var child : Transform in this.transform.parent.transform) {
	    	Destroy(child.GetComponent(core));
			var childTarget = child.GetComponent(target);
			if (!childTarget.exploded) {
				childTarget.exploded = true;
				var randomDirection = Vector3(Random.Range(-359, 359),Random.Range(-359, 359),Random.Range(-359, 359));
				child.transform.Rotate(randomDirection);
			};
    	}
	}
}