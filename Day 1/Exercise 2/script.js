const addTodoBtn = document.getElementById("addTodoBtn");
const todoTextField = document.getElementById("todoTextField");
const todosElement = document.getElementById("todos");

let todos = [];

addTodoBtn.addEventListener("click", () => {
  console.log("Button clicked");

  const todoText = todoTextField.value;

  console.log("รายการที่จะถูกเพิ่ม :", todoText);

  if (todoText) {
    /**
     * @description รายการที่จะถูกเพิ่ม เป็น object ประกอบไปด้วย
     * @key title     - string  - ชื่อของ todo
     * @key completed - boolean - สถานะเสร็จของ todo
     */
    const todo = {};

    todos.push(todo);

    todoTextField.value = "";

    reRenderTodos();
  }
});

// Tip : ทำหน้าที่ในการแสดงผล Todolist ใหม่ เพื่อให้เห็นผลลัพธ์ที่เปลี่ยนแปลงไป
function reRenderTodos() {
  console.log("รายการ Todo ที่จะอัปเดตใหม่ :", todos);

  todosElement.innerHTML = "";

  if (todos.length === 0) {
    // ถ้าไม่มี todo ให้แสดงข้อความว่า "No todos found"

    const todoElement = document.createElement("div");
    todoElement.classList.add("noTodo");
    todoElement.textContent = "No todos found";

    /**
     * @description เพิ่ม element ไปเป็น Children ใน `todosElement` (Hint : ใช้ appendChild)
     */
    // ........
  } else {
    todos.forEach((todo, index) => {
      const eachTodoElement = document.createElement("div");
      /**
       * @description เพิ่ม class ให้กับ `eachTodoElement` โดย class จะชื่อว่า "todo" (Hint : ใช้ classList)
       */
      // ........

      /**
       * @description `eachTodoElement` จะมีโครงสร้างดังนี้
       * <div class="todo-title">
       *  <input class="todo-checkbox" type="checkbox" onchange="onTodoCheck(${index})" ${todo.completed && "checked"} />
       *  <span> ชื่อของ Task ที่ต้องทำ </span>
       * </div>
       * <button class="button button-delete" onclick="onTodoDelete(${index})">Delete</button>
       * @description ให้แทนที่ ชื่อของ Task ที่ต้องทำ ในส่วนของ <span> ด้วยชื่อของ Task ที่ต้องทำ
       * @description หาก Task นั้นเสร็จแล้ว ให้เพิ่ม class ให้กับ <span> โดย class จะชื่อว่า "checked"
       * @tutorial Hint : ข้อนี้เราสามารถทำได้ทั้งหมด 2 วิธี คือ 1. ใช้ innerHTML 2. สร้าง element แล้ว appendChild ลงไป
       * Google หาวิธีการใช้งาน innerHTML และ appendChild ไปเล๊ยยยย ✨
       */
      // ........
      todosElement.appendChild(eachTodoElement);
    });
  }
}

// Tip : สั่งให้แสดงผลครั้งแรก เมื่อโหลดหน้าเว็บไซต์เสร็จ
reRenderTodos();

function onTodoCheck(index) {
  /**
   * @description นำ index ที่ได้มา ไปเปลี่ยนสถานะของ todo ใน Array ให้สลับ completed เป็นหาก true ให้เป็น false หาก false ให้เป็น true
   * โดยใช้ index นั้น
   */
  console.log("Todo ที่จะถูกเปลี่ยนสถานะ :", todos[index]);
  reRenderTodos();
}

function onTodoDelete(index) {
  /**
   * @description นำ index ที่ได้มา ไปลบ todo ใน Array โดยใช้ index นั้น (Hint : ใช้ splice)
   */
  console.log("Todo ที่จะถูกลบ :", todos[index]);
  reRenderTodos();
}
