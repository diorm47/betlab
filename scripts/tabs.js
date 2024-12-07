const tabs = document.querySelector(".match_table_btns");
const tabButton = document.querySelectorAll(".match_table_btn");
const contents = document.querySelectorAll(".tab_content");

if (tabs) {
  tabs.onclick = (e) => {
    let target = e.target;
    while (target && !target.classList.contains("match_table_btn")) {
      target = target.parentNode;
    }
    if (target && target.dataset.id) {
      const id = target.dataset.id;
      tabButton.forEach((btn) => {
        btn.classList.remove("match_table_btn_active");
      });
      target.classList.add("match_table_btn_active");

      contents.forEach((content) => {
        content.classList.remove("active_content");
      });
      const element = document.getElementById(id);
      element.classList.add("active_content");
    }
  };
}
