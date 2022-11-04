const queestion =[
    {
        'que':'The keyword used to transfer control from a function back to the calling function is',
        'a': 'switch',
        'b': 'goto',
        'c': 'go back',
        'd':'return',
        'correct':'d'
    },
    {
        'que':'The great Victoria Desert is located in',
        'a': 'Canada',
        'b': 'West Africa',
        'c': 'Australia',
        'd':'North America',
        'correct':'c'
    },
    {
        'que':'The intersecting lines drawn on maps and globes are',
        'a': 'latitudes',
        'b': 'longitudes',
        'c': 'geographic grids',
        'd':' none of the above',
        'correct':'c'
    }

]

let index=0;
let total = queestion.length;
let right = 0, wrong = 0;
const quebox = document.getElementById("quebox");
const optioninput = document.querySelectorAll('.options');

const loadQuestion =()=>{
    if(index==total)
    {
        return endQuiz();
    }
    reset();
    const data = queestion[index];
    console.log(data);
    quebox.innerText = `${index+1}) ${data.que}`;
    optioninput[0].nextElementSibling.innerText = data.a;
    optioninput[1].nextElementSibling.innerText = data.b;
    optioninput[2].nextElementSibling.innerText = data.c;
    optioninput[3].nextElementSibling.innerText = data.d;
    
}

const submitQuiz =()=>{
    const data = queestion[index];
    const ans = getAnswer();
    if(ans === data.correct)
    {
        right++;

    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;

}

const getAnswer = ()=>
{
    let answer;
    optioninput.forEach(
        (input) => {
            if(input.checked){
              answer = input.value;
              
            }
           
        }
    )
    return answer;
}

const reset = ()=>{
    optioninput.forEach(
        (input) =>{
            input.checked = false;
        }
    )

}

const endQuiz = ()=>{
    document.getElementById('box').innerHTML = `
    <div style="text-align:center">
        <h3> Thanks for playing Quiz</h3>
        <h2>${right}/${total} are correct</h2>
        <h> correct answers:</h>
        <p> 1 = return </p>
        <p> 2 = Australia </p>
        <p> 3 = geographic grids </p>

    </div>
    `
}
loadQuestion(); // initial called

