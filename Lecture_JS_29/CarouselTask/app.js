let arr=[
    'https://images.unsplash.com/photo-1557690756-62754e561982?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SmFpcHVyfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8SmFpcHVyfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNpdHklMjBhdCUyMG5pZ2h0fGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1561312514-1d71b2b7e495?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1569758267239-d08deb78bb1a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
]

let img = document.querySelector('img');
let i = 0;
setInterval(() => {
    img.setAttribute('src', arr[i]);
    i = (i+1)%arr.length;
}, 2000);