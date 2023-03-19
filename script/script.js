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
        document.getElementById('base').value = '';
        document.getElementById('height').value = '';
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