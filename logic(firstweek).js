function keyCodeCheck (event) {
  console.log("event : ", event);

  // 
  if(event.key == 'Enter' && todoInput.value !== ''){
    const todoList= document.getElementById('todoList');
    const newLi=document.createElement('li');
    const newBtn=document.createElement('button');
    const newSpan=document.createElement('span');
    const todoInput=document.querySelector('#todoInput');
    const doneList=document.querySelector('#doneList');

    //아래의 moveTodoToDone함수 작성! 나중에 아래에서 호출할 것임!
    //moveTodoToDone함수 안에 추가+삭제하는 것을 모두 포함한다!
    function moveTodoToDone(todoElement) {
      const doneList = document.getElementById('doneList');
      const todoList = document.getElementById('todoList');
    
      const doneLi = document.createElement('li');
      const doneSpan = document.createElement('span');
      const deleteButton=document.createElement('button');
    
      doneSpan.textContent = todoElement.querySelector('span').textContent;
      doneLi.appendChild(doneSpan);
    
      doneList.appendChild(doneLi);
      todoList.removeChild(todoElement);      

      deleteButton.textContent = '삭제';      //삭제 버튼 만들기
      deleteButton.onclick = function(){      
        doneList.removeChild(doneLi);         //삭제 버튼을 누를 경우에 remove하는 것을 구현
      };

      doneLi.appendChild(doneSpan);
      doneLi.appendChild(deleteButton);

      doneList.appendChild(doneLi);

      todoList.removeChild(todoElement);
    }
    //
    
    //"해야 할 일"에 추가될 li태그에 button을 넣는 기능 구현(button의 기능 구현 중에 moveTodoToDone 함수 호출)
    newLi.appendChild(newBtn);  //li안에 button담기
    newBtn.textContent='완료';  //button의 메세지를 완료로 표시
    newBtn.onclick = function() {   
      //todoList.removeChild(newLi);
      moveTodoToDone(newLi);
      todoList.parentNode.replaceChild(doneList,todoList);  //todoList에 있는 내용들을 빼서 doneList로 li 태그형식으로 넣어준다!
    };
    newLi.appendChild(newBtn);  //newLi가 추가될때 button도 같이 추가되도록...
    todoList.appendChild(newLi);//todoList에 newLi 추가!

    newSpan.textContent=todoInput.value;   
    newLi.appendChild(newSpan); //li안에 span 담기

    todoList.appendChild(newLi);
    
    todoInput.value = '';
  }
}






