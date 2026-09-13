const container = document.querySelector('.container');
  let currentTransaction = null;

  container.addEventListener('click', (e) => {
    const transaction = e.target.closest('.transaction');
    const closeBtn = e.target.closest('.close-btn');

    if (closeBtn) {
      const expandedTransaction = document.querySelector('.transaction.expanded');
      const otherTransactions = [...document.querySelectorAll('.transaction')].filter(t => t !== expandedTransaction);
      otherTransactions.forEach(t => t.classList.remove('not-expanded'));
      if(expandedTransaction) {
        document.startViewTransition({
          update: () => {
            expandedTransaction.classList.remove('expanded');
          },
          types: ['collapse']
        });
      }
      return;
    }
    else if(transaction) {
      if(!transaction.classList.contains('expanded')) {
        const otherTransactions = [...document.querySelectorAll('.transaction')].filter(t => t !== transaction);
        otherTransactions.forEach(t => t.classList.add('not-expanded'));
        document.startViewTransition({
          update: () => {
            transaction.classList.add('expanded');
        },
          types: ['expand']
        });
      }
    }
  });