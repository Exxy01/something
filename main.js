var random_number = Math.floor((Math.random()*x.length)+1)
x = [1, 10]

sketch_elements = x[random_number];
console.log(random_number)
document.getElementById("label").innerHTML = sketch_elements
timer_counter = 0
timer_check = ""
drawn_sketch = ""
answer_holder = ""
score = 0