export default {
  mounted(el: HTMLElement): void {
    el.onclick = (event: any) => {
      const x = event.clientX - event.target.offsetLeft;
      const y = event.clientY - event.target.offsetTop;
      const ripple = document.createElement("span");

      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.classList.add("ripple");

      event.target.append(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 1_000);
    };
  },
};
