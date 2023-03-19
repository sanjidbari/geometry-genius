document.getElementById('blog').addEventListener('click', function(){
    window.location.href = "blog.html";
})

// triangle area

document.getElementById('triangle-button').addEventListener('click', function(){
    const base = document.getElementById('base').value;
    const height = document.getElementById('height').value;
    const area = 0.5 * base * height;
    if(isNaN(area) == true || area <= 0){  
        alert('Please type positive numbers only');
        document.getElementById('base').value = '';
        document.getElementById('height').value = '';
    }
    else {
        const display = document.getElementById('calculation-area');
        const div = document.createElement('div');
        div.classList.add("my-4");
        div.innerHTML = `<p class="inline text-xl">1. Triangle ${area} cm<sup>2</sup></p>
        <button class="p-2 bg-blue-500 text-xl text-white rounded-md ml-2">meter</button>`;
        display.appendChild(div);
    }
})

// rectangle area

document.getElementById('rectangle-button').addEventListener('click', function(){
    const width = document.getElementById('width').value;
    const length = document.getElementById('length').value;
    const area = width * length;
    if(isNaN(area) == true || area <= 0){  
        alert('Please type positive numbers only');
        document.getElementById('length').value = '';
        document.getElementById('width').value = '';
    }
    else {
        const display = document.getElementById('calculation-area');
        const div = document.createElement('div');
        div.classList.add("my-4");
        div.innerHTML = `<p class="inline text-xl">2. Rectangle ${area} cm<sup>2</sup></p>
        <button class="p-2 bg-blue-500 text-xl text-white rounded-md ml-2">meter</button>`;
        display.appendChild(div);
    }
})

// parallelogram area

document.getElementById('parallelogram-button').addEventListener('click', function(){
    const height = document.getElementById('height-para').value;
    const base = document.getElementById('base-para').value;
    const area = base * height;
    if(isNaN(area) == true || area <= 0){  
        alert('Please type positive numbers only');
        document.getElementById('base-para').value = '';
        document.getElementById('height-para').value = '';
    }
    else {
        const display = document.getElementById('calculation-area');
        const div = document.createElement('div');
        div.classList.add("my-4");
        div.innerHTML = `<p class="inline text-xl">3. Parallelogram ${area} cm<sup>2</sup></p>
        <button class="p-2 bg-blue-500 text-xl text-white rounded-md ml-2">meter</button>`;
        display.appendChild(div);
    }
})

// Rhombus area

document.getElementById('rhombus-button').addEventListener('click', function(){
    const d1 = document.getElementById('d1').value;
    const d2 = document.getElementById('d2').value;
    const area = 0.5 * d1 * d2;
    if(isNaN(area) == true || area <= 0){  
        alert('Please type positive numbers only');
        document.getElementById('d1').value = '';
        document.getElementById('d2').value = '';
    }
    else {
        const display = document.getElementById('calculation-area');
        const div = document.createElement('div');
        div.classList.add("my-4");
        div.innerHTML = `<p class="inline text-xl">4. Rhombus ${area} cm<sup>2</sup></p>
        <button class="p-2 bg-blue-500 text-xl text-white rounded-md ml-2">meter</button>`;
        display.appendChild(div);
    }
})

// pentagon area

document.getElementById('pentagon-button').addEventListener('click', function(){
    const p = document.getElementById('p').value;
    const b = document.getElementById('b').value;
    const area = 0.5 * p * b;
    if(isNaN(area) == true || area <= 0){  
        alert('Please type positive numbers only');
        document.getElementById('p').value = '';
        document.getElementById('b').value = '';
    }
    else {
        const display = document.getElementById('calculation-area');
        const div = document.createElement('div');
        div.classList.add("my-4");
        div.innerHTML = `<p class="inline text-xl">5. Pentagon ${area} cm<sup>2</sup></p>
        <button class="p-2 bg-blue-500 text-xl text-white rounded-md ml-2">meter</button>`;
        display.appendChild(div);
    }
})

// ellipse area

document.getElementById('ellipse-button').addEventListener('click', function(){
    const a = document.getElementById('a').value;
    const b = document.getElementById('b-ellipse').value;;
    const area = 3.14 * a * b;
    area.toFixed(2);
    if(isNaN(area) == true || area <= 0){
        console.log(area);  
        alert('Please type positive numbers only');
        document.getElementById('a').value = '';
        document.getElementById('b-ellipse').value = '';
    }
    else {
        const display = document.getElementById('calculation-area');
        const div = document.createElement('div');
        div.classList.add("my-4");
        div.innerHTML = `<p class="inline text-xl">6. Ellipse ${area} cm<sup>2</sup></p>
        <button class="p-2 bg-blue-500 text-xl text-white rounded-md ml-2">meter</button>`;
        display.appendChild(div);
    }
})