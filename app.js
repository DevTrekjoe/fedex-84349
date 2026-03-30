// Tab switching on homepage
document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.track-tab');
  const panels = {
    track: document.getElementById('track-panel'),
    ship: document.getElementById('ship-panel'),
    rates: document.getElementById('rates-panel')
  };

  tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      tabs.forEach(function(t) { t.classList.remove('active'); });
      tab.classList.add('active');
      var target = tab.getAttribute('data-tab');
      Object.keys(panels).forEach(function(key) {
        if (panels[key]) {
          panels[key].classList.toggle('hidden', key !== target);
        }
      });
    });
  });

  // FAQ accordion
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function(item) {
    var question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', function() {
        item.classList.toggle('open');
      });
    }
  });

  // Mobile menu toggle
  var menuBtn = document.querySelector('.mobile-menu-btn');
  var nav = document.querySelector('.main-nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function() {
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
      nav.style.flexDirection = 'column';
      nav.style.position = 'absolute';
      nav.style.top = '64px';
      nav.style.left = '0';
      nav.style.right = '0';
      nav.style.background = '#fff';
      nav.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
      nav.style.padding = '16px';
    });
  }
});
