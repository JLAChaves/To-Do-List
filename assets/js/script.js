document.querySelector('#addBtn').onclick = function()
{
  if(document.querySelector('#myInput').value.length == 0)
  {
    alert("Please Enter a Task")
  }

  else
  {
    document.querySelector('#tasks').innerHTML += 
    `<div class="task">   
        <p id="check">       
            <input type="checkbox" class="box" value="on">${document.querySelector('#myInput').value}
        </p>
        <button class="delete">
          Remove <i class='fas fa-trash'></i>
        </button>
      </div>`;

    var current_tasks = document.querySelectorAll(".delete");
    for(let i=0; i<current_tasks.length; i++)
    {
      current_tasks[i].onclick = function()
      {
        this.parentNode.remove();
      };
    };

    var elems = document.getElementsByClassName('box');
    for(let i = 0; i<elems.length; i++)
    {
      elems[i].onclick = function()
      {
        this.parentNode.classList.toggle('checked');
      };
    };
  }   
}


