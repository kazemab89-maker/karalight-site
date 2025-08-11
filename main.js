
window.KL = {
  handleSubmit: function(e){
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    const box = document.getElementById('formResult');
    box.textContent = 'پیام شما ثبت شد:\n' + JSON.stringify(data, null, 2) + '\n(برای اتصال واقعی به ایمیل/واتساپ، باید فرم به سرویس بک‌اند وصل شود.)';
    e.target.reset();
    return false;
  }
};
