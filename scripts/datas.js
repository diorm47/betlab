document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".tables_filters_list_btn");
  const tableItems = document.querySelectorAll(".table_list_item");
  const tableItemsList = document.querySelector(".table_items_list");

  // Функциональность кнопок для прокрутки к элементу
  filterButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      // Убираем активный класс у всех кнопок
      filterButtons.forEach((button) =>
        button.classList.remove("tables_filters_list_btn_active")
      );

      // Добавляем активный класс текущей кнопке
      btn.classList.add("tables_filters_list_btn_active");

      // Убираем активный класс у всех элементов
      tableItems.forEach((item) =>
        item.classList.remove("table_list_item_active")
      );

      // Добавляем активный класс к соответствующему элементу
      const targetItem = tableItems[index + 1];
      targetItem.classList.add("table_list_item_active");
      // targetItem.classList.add("table_list_item_first");
      // Прокручиваем до нужного элемента
      targetItem.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    });
  });

  // Функционал grab (перетаскивания мышкой)
  let isDragging = false;
  let startX;
  let scrollLeft;

  tableItemsList.addEventListener("mousedown", (e) => {
    isDragging = true;
    tableItemsList.classList.add("grabbing"); // Добавляем класс для эффекта
    startX = e.pageX - tableItemsList.offsetLeft;
    scrollLeft = tableItemsList.scrollLeft;
  });

  tableItemsList.addEventListener("mouseleave", () => {
    isDragging = false;
    tableItemsList.classList.remove("grabbing");
  });

  tableItemsList.addEventListener("mouseup", () => {
    isDragging = false;
    tableItemsList.classList.remove("grabbing");
  });

  tableItemsList.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - tableItemsList.offsetLeft;
    const walk = (x - startX) * 2; // Скорость прокрутки
    tableItemsList.scrollLeft = scrollLeft - walk;
  });
});
