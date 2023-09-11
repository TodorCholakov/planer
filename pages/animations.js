export const titleAnimation = {
    hidden:{opacity:0},
    show:{opacity:1, transition: {duration:1}},
  }
export const pageAnimation = {
    hiden:{
        opacity:0,
        y:300
    }, 
    show: {
        opacity:1,
        y:0,
        transition:{
            duration:1,
        }
    },
    exit: {
        opacity:0,
        y:300,
        transition:{
            duration:1,
        }
    }
}

export const container = {
    hidden:{y:100},
    show: {y:0, transition:{duration:0.75, ease:"easeOut", staggerChildren:0.15}}
  }