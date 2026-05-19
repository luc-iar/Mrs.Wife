var tl2 = new TimelineMax({onUpdate:updatePercentage});

const controller2 = new ScrollMagic.Controller();

tl2.from(".placard-main", {
    duration:1,
    scale:0,
    y:1000
  });

tl2.from(".q1, .qb", {
    duration:1,
    scale:0
  });

tl2.from(".qa, .q2", {
    duration:1,
    scale:0
  });

const scene2 = new ScrollMagic.Scene ({
    triggerElement:".stickytwo",
    triggerHook:"onLeave",
    duration:"100%"
})

.setPin(".stickytwo")
.setTween(tl2)
.addTo(controller2);

function updatePercentage() {
    tl2.progress()
}

/*---------*/

var tl3 = new TimelineMax({onUpdate:updatePercentage});

const controller3 = new ScrollMagic.Controller();

tl3.from(".beige-block01", {
    duration:4,
    x:-1000
  });

tl3.from(".beige-block02", {
    duration:4,
    x:1000
  });


const scene3 = new ScrollMagic.Scene ({
    triggerElement:".stickythree",
    triggerHook:"onLeave",
    duration:"100%"
})

.setPin(".stickythree")
.setTween(tl3)
.addTo(controller3);

function updatePercentage() {
    tl3.progress()
}

/*---------------*/

var tl7 = new TimelineMax({onUpdate:updatePercentage});

const controller7 = new ScrollMagic.Controller();

tl7.from(".circle01" , {
    duration:3,
    opacity: 0
  });

  tl7.from(".circle02" , {
    duration:3,
    opacity: 0
  });

  tl7.from(".circle03" , {
    duration:3,
    opacity: 0
  });

    tl7.from(".circle04" , {
    duration:3,
    opacity: 0
  });

const scene7 = new ScrollMagic.Scene ({
    triggerElement:".stickyseven",
    triggerHook:"onLeave",
    duration:"100%"
})

.setPin(".stickyseven")
.setTween(tl7)
.addTo(controller7);

function updatePercentage() {
    tl7.progress()
}

/*---------------*/

var tl8 = new TimelineMax({onUpdate:updatePercentage});

const controller8 = new ScrollMagic.Controller();

tl8.from(".impact-p01" , {
    duration:1,
    x: 10000
  });

  tl8.from(".impact-p02" , {
    duration:1,
    x: 10000
  });

  tl8.from(".impact-p03" , {
    duration:1,
    x: 10000
  });

  tl8.from(".impact-p04" , {
    duration:1,
    x: 10000
  });

const scene8 = new ScrollMagic.Scene ({
    triggerElement:".stickyeight",
    triggerHook:"onLeave",
    duration:"100%"
})

.setPin(".stickyeight")
.setTween(tl8)
.addTo(controller8);

function updatePercentage() {
    tl8.progress()
}
