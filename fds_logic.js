let main_point = "Y"

let percd = 0
let scroll = document.getElementById("m3")
let incd_s = scroll.offsetWidth

let scrolled = document.getElementById("m31")

let pmise = waiter(6000)
pmise
  .then((data) => {
    // window.alert(data)
    console.log(data)
  })

  .catch((error) => {
    console.log(error)
  })

main()

async function waiter(params) {
  let pmise = new Promise(function (resolve) {
    setTimeout(() => {
      let banner = "If you like, please support my work"
      resolve(banner)
    }, params);
  })
  return await pmise
}

function main() {

  let perc = Math.floor(Math.random() * incd_s)
  let fwidth = (perc * 100) / incd_s
  scrolled.style.width = perc + "px"
  let mgb = document.getElementById("gb")
  percd = perc
  mgb.textContent = percd
  let ingrid = document.getElementById("spgb")
  ingrid.textContent = percd
}

function mover(fid) {
  if (fid.id == "incd") {
    let mgb = document.getElementById("gb")
    let incd_s = scroll.offsetWidth
    let incd_w = scrolled.offsetWidth
    let wdt = incd_s - incd_w
    if (incd_s > incd_w) {
      let i = incd_w
      percd = Math.floor(100 - ((100 * wdt) / incd_s))
      percd--
      let k = setInterval(() => {
        scrolled.style.width = i + "px"
        mgb.textContent = percd++
        i++
        if (i > incd_s) {
          let ingrid = document.getElementById("spgb")
          ingrid.textContent = --percd
          clearInterval(k)
        }
      }, 10);
    }
  }



  if (fid.id == "decd") {
    let mgb = document.getElementById("gb")
    let incd_w = scrolled.offsetWidth
    let i = incd_w
    percd = Math.floor(i / 2)
    let k = setInterval(() => {
      scrolled.style.width = i + "px"
      mgb.textContent = i--
      if (i < percd) {
        let ingrid = document.getElementById("spgb")
        ingrid.textContent = --percd
        clearInterval(k)
      }
    }, 10);
  }



  if (fid.id == "midd") {
    let mgb = document.getElementById("gb")
    let incd_w = scrolled.offsetWidth
    let fwidth = Math.floor(Math.random() * incd_s) 
    if (fwidth > incd_w) {
      let i = incd_w
      // percd = Math.floor(100 - ((100 * wdt) / incd_s))
      percd--
      let k = setInterval(() => {
        scrolled.style.width = i + "px"
        mgb.textContent = percd++
        i++
        if (i > fwidth) {
          let ingrid = document.getElementById("spgb")
          ingrid.textContent = --percd
          clearInterval(k)
        }
      }, 10);
    }
    if (fwidth < incd_w) {
      let i = incd_w
      // percd = Math.floor(100 - ((100 * wdt) / incd_s))sw AwaAQ2
      let k = setInterval(() => {
        scrolled.style.width = i + "px"
        percd-- 
        mgb.textContent = percd
        i--
        if (i < fwidth) {
          let ingrid = document.getElementById("spgb")
          ingrid.textContent = percd
          if (percd < 0) {
            let neg = `Negative value of ${percd}GB is reached!!!`
            window.alert(neg)
          }
          clearInterval(k)
        }
      }, 10);
    }
  }

}