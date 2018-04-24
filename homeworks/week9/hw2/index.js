function Stack() {
	var stack = [];
	return {
		push: function(n) {
			stack.push(n);
		},
		pop: function(n) {
			console.log(stack.pop());
		}
	}
}

var pp = new Stack();
pp.push(1);
pp.push(4);
pp.pop();
pp.pop();

function Queue() {
	var queue = [];
	return {
		push: function(n) {
			queue.push(n);
		},
		pop: function(n){
			console.log(queue.shift());
		}
	}
}

var abc = new Queue();
abc.push(5);
abc.push(6);
abc.push(7);

abc.pop();
abc.pop();
abc.pop();
