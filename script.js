
// modal
let modal = document.getElementById("modal")
let close = document.getElementById("close")
if (modal.classList.contains("show")) {
    document.body.classList.add("dontscroll")
}
const dissapearmodal = () => {
    modal.classList.remove("show")
    document.body.classList.remove("dontscroll")
}
close.addEventListener("click", dissapearmodal)



// nav bar
let home = document.getElementById("home")
const gohome = () => {
    window.scrollTo(0, 0);
}
home.addEventListener("click", gohome)

let dff = document.getElementById("dff")
const dffc = () => {
    window.scrollTo(0, 1255);
}
dff.addEventListener("click", dffc)

let clasi = document.getElementById("clasi")
const clasic = () => {
    window.scrollTo(0, 2330);
}
clasi.addEventListener("click", clasic)

let dca = document.getElementById("dca")
const dcac = () => {
    window.scrollTo(0, 3672);
}
dca.addEventListener("click", dcac)

let wa = document.getElementById("wa")
const wac = () => {
    window.scrollTo(0, 4540);
}
wa.addEventListener("click", wac)

let faqsheaderr = document.getElementById("faqsheaderr")
const faqsheaderrc = () => {
    window.scrollTo(0, 5217);
}
faqsheaderr.addEventListener("click", faqsheaderrc)

let contact = document.getElementById("contact")
const contactc = () => {
    window.scrollTo(0, 5873);
}
contact.addEventListener("click", contactc)


// start button
let start = document.getElementById("getstarted")
const gotodrilling = () => {
    window.scrollTo(0, 651);
}
start.addEventListener("click", gotodrilling)

let calltoaction = document.getElementById("calltoaction")
const calltoactionc = () => {
    window.scrollTo(0, 0);
}
calltoaction.addEventListener("click", calltoactionc)

let dmm = document.getElementById("logof")
const dmmc = () => {
    window.scrollTo(0, 0);
}
dmm.addEventListener("click", dmmc)

let initialvolvalue = 0
let initialdensity = 0
let enddensity = 0
let additive_density = 3.6

let volumeincrement = 0
let finalvolume = 0
let totalmasstoadd = 0

let firstanswer = document.getElementById("firstanswer")
let secondanswer = document.getElementById("secondanswer")
let thirdanswer = document.getElementById("thirdanswer")

let custom = document.querySelector(".custom")
let custominput = document.getElementById("custominput")

let initialmudvolume = document.getElementById("initialmudvolume")
let initialmuddensity = document.getElementById("initialmuddensity")
let finalmuddensity = document.getElementById("finalmuddensity")

let resetb = document.getElementById("reset")

// --------variables de animaciones-------
let gear1 = document.querySelector(".gear1")
let gear2 = document.querySelector(".gear2")
let rock1 = document.querySelector(".rock1")
let smallrock1 = document.querySelector(".smallrock1")
let smallrock2 = document.querySelector(".smallrock2")
let smallrock3 = document.querySelector(".smallrock3")
let powder1 = document.querySelector(".powder1")
let powder2 = document.querySelector(".powder2")
let powder3 = document.querySelector(".powder3")
let powder4 = document.querySelector(".powder4")
let powder5 = document.querySelector(".powder5")
let powder6 = document.querySelector(".powder6")
let powder7 = document.querySelector(".powder7")
let powder8 = document.querySelector(".powder8")
let powder9 = document.querySelector(".powder9")
let powder10 = document.querySelector(".powder10")
let powder11 = document.querySelector(".powder11")
let powder12 = document.querySelector(".powder12")
let powder13 = document.querySelector(".powder13")
let powder14 = document.querySelector(".powder14")
let powder15 = document.querySelector(".powder15")
let powder16 = document.querySelector(".powder16")
let firstmud = document.querySelector(".firstmud")
let animationdissapear = document.querySelector(".seen")

const calculate = (ev) => {
    ev.preventDefault()

    // ---------Obtener los valores---------
    getValues()
    // savedensityvalue() esta afuera porque escucha otro boton


    // ---------Hacer los calculos------
    if (initialdensity > enddensity) {
        alert("Your initial mud density must be lower than your final density")
        animationdissapear.innerHTML = ""
    } else {
        if (initialvolvalue.length > 5) {
            alert("Your volume cant be over 100 liters")
            animationdissapear.innerHTML = ""
        } else {
            if (initialmudvolume.value <= 0 || initialmuddensity.value <= 0 || finalmuddensity.value <= 0) {
                alert("Please introduce all the required values (Negative values are not permited)")
                //Uso volincrement para resetear los resultados porque es aqui donde se guarda el reultado de los calculos,
                // no uso firstanswer.html porque no funciona

                // firstanswer.innerHTML = 0
                // secondanswer.innerHTML = 0
                // thirdanswer.innerHTML = 0
                volumeincrement = 0
                finalvolume = 0
                totalmasstoadd = 0
                animationdissapear.innerHTML = ""

            } else {
                if (initialdensity.value > 12 || finalmuddensity.value > 12) {
                    alert("Please introduce a valid density for your fluid (maximum density permitted is 12)")
                    volumeincrement = 0
                    finalvolume = 0
                    totalmasstoadd = 0
                    animationdissapear.innerHTML = ""
                } else {


                    if (custominput.classList.contains("dontshow")) {

                        volumeincrement = volincrease()
                        finalvolume = finalvol()
                        totalmasstoadd = masstoadd()

                        gear1.classList.toggle("animated")
                        gear2.classList.toggle("animated")
                        rock1.classList.toggle("animated")
                        smallrock1.classList.toggle("animated")
                        smallrock2.classList.toggle("animated")
                        smallrock3.classList.toggle("animated")
                        powder1.classList.toggle("animated")
                        powder2.classList.toggle("animated")
                        powder3.classList.toggle("animated")
                        powder4.classList.toggle("animated")
                        powder5.classList.toggle("animated")
                        powder6.classList.toggle("animated")
                        powder7.classList.toggle("animated")
                        powder8.classList.toggle("animated")
                        powder9.classList.toggle("animated")
                        powder10.classList.toggle("animated")
                        powder11.classList.toggle("animated")
                        powder12.classList.toggle("animated")
                        powder13.classList.toggle("animated")
                        powder14.classList.toggle("animated")
                        powder15.classList.toggle("animated")
                        powder16.classList.toggle("animated")
                        firstmud.classList.toggle("animated")

                        let forcefluid = () => {
                            firstmud.classList.add("animated")
                        }
                        powder1.addEventListener("animationstart", forcefluid)

                        let restart = () => {
                            gear1.classList.remove("animated")
                            gear2.classList.remove("animated")
                            rock1.classList.remove("animated")
                            smallrock1.classList.remove("animated")
                            smallrock2.classList.remove("animated")
                            smallrock3.classList.remove("animated")
                            powder1.classList.remove("animated")
                            powder2.classList.remove("animated")
                            powder3.classList.remove("animated")
                            powder4.classList.remove("animated")
                            powder5.classList.remove("animated")
                            powder6.classList.remove("animated")
                            powder7.classList.remove("animated")
                            powder8.classList.remove("animated")
                            powder9.classList.remove("animated")
                            powder10.classList.remove("animated")
                            powder11.classList.remove("animated")
                            powder12.classList.remove("animated")
                            powder13.classList.remove("animated")
                            powder14.classList.remove("animated")
                            powder15.classList.remove("animated")
                            powder16.classList.remove("animated")
                        }
                        powder14.addEventListener("animationend", restart)


                    } else {
                        if (custominput.value >= 1.41 && custominput.value <= 12) {
                            additive_density = custominput.value
                            volumeincrement = volincrease()
                            finalvolume = finalvol()
                            totalmasstoadd = masstoadd()
                            gear1.classList.toggle("animated")
                            gear2.classList.toggle("animated")
                            rock1.classList.toggle("animated")
                            smallrock1.classList.toggle("animated")
                            smallrock2.classList.toggle("animated")
                            smallrock3.classList.toggle("animated")
                            powder1.classList.toggle("animated")
                            powder2.classList.toggle("animated")
                            powder3.classList.toggle("animated")
                            powder4.classList.toggle("animated")
                            powder5.classList.toggle("animated")
                            powder6.classList.toggle("animated")
                            powder7.classList.toggle("animated")
                            powder8.classList.toggle("animated")
                            powder9.classList.toggle("animated")
                            powder10.classList.toggle("animated")
                            powder11.classList.toggle("animated")
                            powder12.classList.toggle("animated")
                            powder13.classList.toggle("animated")
                            powder14.classList.toggle("animated")
                            powder15.classList.toggle("animated")
                            powder16.classList.toggle("animated")
                            firstmud.classList.toggle("animated")

                            let forcefluid = () => {
                                firstmud.classList.add("animated")
                            }
                            powder1.addEventListener("animationstart", forcefluid)

                            let restart = () => {
                                gear1.classList.remove("animated")
                                gear2.classList.remove("animated")
                                rock1.classList.remove("animated")
                                smallrock1.classList.remove("animated")
                                smallrock2.classList.remove("animated")
                                smallrock3.classList.remove("animated")
                                powder1.classList.remove("animated")
                                powder2.classList.remove("animated")
                                powder3.classList.remove("animated")
                                powder4.classList.remove("animated")
                                powder5.classList.remove("animated")
                                powder6.classList.remove("animated")
                                powder7.classList.remove("animated")
                                powder8.classList.remove("animated")
                                powder9.classList.remove("animated")
                                powder10.classList.remove("animated")
                                powder11.classList.remove("animated")
                                powder12.classList.remove("animated")
                                powder13.classList.remove("animated")
                                powder14.classList.remove("animated")
                                powder15.classList.remove("animated")
                                powder16.classList.remove("animated")
                            }
                            powder14.addEventListener("animationend", restart)


                        } else {
                            alert("Please introduce a valid density (Maximum density permitted is 12, minimum 1.41)")
                            volumeincrement = 0
                            finalvolume = 0
                            totalmasstoadd = 0
                            animationdissapear.innerHTML = ""
                        }
                    }
                }
            }
        }
    }
    // ----------Mete los resultados al DOM (con 3 decimales)-------
    showValuesInDOM()
}
button = document.getElementById("thebutton")
button.addEventListener("click", calculate)

let densitybutton = document.querySelectorAll(".densities")

const savedensityvalue = (event) => {
    // Esto sirve para que si ya esta seleccionada una densidad (que tenga la clase clicked no haga nada)
    if (event.target.classList.contains("clicked")) {

    } else {
        if (event.target.classList.contains("custom")) {
            for (let i = 0; i < densitybutton.length; i++) {
                //le quita a todos los botones la clase clicked
                densitybutton[i].classList.remove("clicked")
                //le coloca a todos su nombre
                densitybutton[i].innerHTML = densitybutton[i].dataset.label;
            }
            event.target.classList.toggle("clicked")
            custominput.classList.toggle("dontshow")
            custom.innerHTML = ""


        } else {
            // restablece todos los botones
            for (let i = 0; i < densitybutton.length; i++) {
                //le quita a todos los botones la clase clicked
                densitybutton[i].classList.remove("clicked")
                //le coloca a todos su nombre
                densitybutton[i].innerHTML = densitybutton[i].dataset.label;
            }

            // Le agrega la clase clicked al que fue clickado nuevamente
            event.target.classList.toggle("clicked")
            //Esconde el input de custom
            custominput.classList.add("dontshow")
            // escribe el valor numerico
            event.target.innerHTML = event.target.dataset.value

            //guarda el valor para el calculo
            additive_density = event.target.dataset.value
        }
    }
}

for (let i = 0; i < densitybutton.length; i++) {
    densitybutton[i].addEventListener('click', savedensityvalue);
}
const getValues = () => {
    initialvolvalue = document.getElementById("initialmudvolume").value
    initialdensity = document.getElementById("initialmuddensity").value
    enddensity = document.getElementById("finalmuddensity").value

}
const volincrease = () => {
    return (initialvolvalue) * ((enddensity - initialdensity) / (additive_density - enddensity))
}
const finalvol = () => {
    return ((initialvolvalue) * ((additive_density - initialdensity) / (additive_density - enddensity)))
}
const masstoadd = () => {
    return (finalvol() - initialvolvalue) * (additive_density)
}

const showValuesInDOM = () => {
    firstanswer.innerHTML = volumeincrement.toFixed(3)
    secondanswer.innerHTML = finalvolume.toFixed(3)
    thirdanswer.innerHTML = totalmasstoadd.toFixed(3)

}

const resetfunction = () => {
    initialmudvolume.value = ""
    initialmuddensity.value = ""
    finalmuddensity.value = ""
    //No reseteo el valor de densidad porque se genera un problema,
    //al resetear, si se hace otra vez el calculo se muestran los resultados
    //obtenidos en el calculo anterior (esto porque al resetear volvemos a poner a
    //la barita como el material predeterminado pero no lo detecta)

    // for (let i = 0; i < densitybutton.length; i++) {
    //     //le quita a todos los botones la clase clicked
    //     densitybutton[i].classList.remove("clicked")
    //     //le coloca a todos su nombre
    //     densitybutton[i].innerHTML = densitybutton[i].dataset.label;
    // }
    // barite.classList.add("clicked")

    firstanswer.innerHTML = ""
    secondanswer.innerHTML = ""
    thirdanswer.innerHTML = ""
    gear1.classList.remove("animated")
    gear2.classList.remove("animated")
    rock1.classList.remove("animated")
    smallrock1.classList.remove("animated")
    smallrock2.classList.remove("animated")
    smallrock3.classList.remove("animated")
    powder1.classList.remove("animated")
    powder2.classList.remove("animated")
    powder3.classList.remove("animated")
    powder4.classList.remove("animated")
    powder5.classList.remove("animated")
    powder6.classList.remove("animated")
    powder7.classList.remove("animated")
    powder8.classList.remove("animated")
    powder9.classList.remove("animated")
    powder10.classList.remove("animated")
    powder11.classList.remove("animated")
    powder12.classList.remove("animated")
    powder13.classList.remove("animated")
    powder14.classList.remove("animated")
    powder15.classList.remove("animated")
    powder16.classList.remove("animated")
    firstmud.classList.remove("animated")

}
resetb.addEventListener("click", resetfunction)

// -----------------hasta aqui es la calcu1----------------


// ---------------aqui hare lo de darle a clic y seleccionar entre calculadoras---------------
let calculator1selection = document.getElementById("page1")
let calculator2selection = document.getElementById("page2")

let calculator1 = document.getElementById("calcfather")
let calculator2 = document.getElementById("calcfather2")

// colores
let page2 = document.querySelector(".page2")
let page1 = document.querySelector(".page1")
// con esto ocultamos la calcu 1 al presionar la pestana de ssame volume
const showcalc2hidecalc1 = () => {
    calculator1.classList.add("hidden")
    calculator2.classList.remove("hidden")
    page2.classList.add("clicked")
    page1.classList.add("notclicked")

}

calculator2selection.addEventListener("click", showcalc2hidecalc1)

// esto oculta la calcu 1
const showcalc1hidecalc2 = () => {
    calculator2.classList.add("hidden")
    calculator1.classList.remove("hidden")
    page2.classList.remove("clicked")
    page1.classList.remove("notclicked")
}

calculator1selection.addEventListener("click", showcalc1hidecalc2)

// -----------------------calcu2----------------------------------

let finalmudvol_calc2 = 0
let initialdensity_calc2 = 0
let enddensity_calc2 = 0
let additive_density_calc2 = 3.6

let volumetoretire_calc2 = 0
let volumeneededbefore_calc2 = 0
let totalmasstoadd_calc2 = 0

let firstanswer_calc2 = document.getElementById("firstanswer_calc2")
let secondanswer_calc2 = document.getElementById("secondanswer_calc2")
let thirdanswer_calc2 = document.getElementById("thirdanswer_calc2")

let custom_calc2 = document.querySelector(".custom_calc2")
let custominput_calc2 = document.getElementById("custominput_calc2")

let finalmudvolume_calc2 = document.getElementById("finalmudvolume_calc2")
let initialmuddensity_calc2 = document.getElementById("initialmuddensity_calc2")
let finalmuddensity_calc2 = document.getElementById("finalmuddensity_calc2")

let resetb_calc2 = document.getElementById("reset_calc2")


// variables para la animacion 2
let additiverock = document.querySelector(".additiverock")
let newgear1 = document.querySelector(".newgear1")
let newgear2 = document.querySelector(".newgear2")
let beakerglass = document.querySelector(".beakerglass")
let fluid2 = document.querySelector(".fluid2")
let spill = document.querySelector(".spill")
let mediumrock = document.querySelector(".mediumrock")
let mediumrock2 = document.querySelector(".mediumrock2")
let mediumrock3 = document.querySelector(".mediumrock3")
let powderrock1 = document.querySelector(".powderrock1")
let powderrock2 = document.querySelector(".powderrock2")
let powderrock3 = document.querySelector(".powderrock3")
let powderrock4 = document.querySelector(".powderrock4")
let powderrock5 = document.querySelector(".powderrock5")
let powderrock6 = document.querySelector(".powderrock6")
let powderrock7 = document.querySelector(".powderrock7")
let powderrock8 = document.querySelector(".powderrock8")
let powderrock9 = document.querySelector(".powderrock9")
let powderrock10 = document.querySelector(".powderrock10")

const calculate_calc2 = (ev) => {
    ev.preventDefault()


    // ---------Obtener los valores---------
    getValues_calc2()
    // savedensityvalue() esta afuera porque escucha otro boton


    // ---------Hacer los calculos------
    if (initialdensity_calc2 > enddensity_calc2) {
        alert("Your initial mud density must be lower than your final density")
    } else {
        if (finalmudvol_calc2.length > 5) {
            alert("Your volume cant be over 100 liters")
        } else {
            if (finalmudvolume_calc2.value <= 0 || initialmuddensity_calc2.value <= 0 || finalmuddensity_calc2.value <= 0) {
                alert("Please introduce all the required values (negative values are nor permited)")
                volumetoretire_calc2 = 0
                volumeneededbefore_calc2 = 0
                totalmasstoadd_calc2 = 0
            } else {
                if (initialmuddensity_calc2.value > 12 || finalmuddensity_calc2.value > 12) {
                    alert("Please introduce a valid density for your fluid (maximum density permitted is 12)")
                    volumeincrement = 0
                    finalvolume = 0
                    totalmasstoadd = 0
                } else {
                    if (custominput_calc2.classList.contains("dontshow_calc2")) {

                        volumetoretire_calc2 = voltoretire_calc2()
                        volumeneededbefore_calc2 = finalvol_calc2()
                        totalmasstoadd_calc2 = masstoadd_calc2()

                        powderrock1.classList.toggle("animated")
                        powderrock2.classList.toggle("animated")
                        powderrock3.classList.toggle("animated")
                        powderrock4.classList.toggle("animated")
                        powderrock5.classList.toggle("animated")
                        powderrock6.classList.toggle("animated")
                        powderrock7.classList.toggle("animated")
                        powderrock8.classList.toggle("animated")
                        powderrock9.classList.toggle("animated")
                        powderrock10.classList.toggle("animated")
                        mediumrock.classList.toggle("animated")
                        mediumrock2.classList.toggle("animated")
                        mediumrock3.classList.toggle("animated")
                        additiverock.classList.toggle("animated")
                        newgear1.classList.toggle("animated")
                        newgear2.classList.toggle("animated")
                        beakerglass.classList.toggle("animated")
                        spill.classList.toggle("animated")
                        fluid2.classList.toggle("animated")

                        let forcefluid2 = () => {
                            fluid2.classList.add("animated")
                        }
                        beakerglass.addEventListener("animationstart", forcefluid2)

                        let restart2 = () => {
                            powderrock1.classList.remove("animated")
                            powderrock2.classList.remove("animated")
                            powderrock3.classList.remove("animated")
                            powderrock4.classList.remove("animated")
                            powderrock5.classList.remove("animated")
                            powderrock6.classList.remove("animated")
                            powderrock7.classList.remove("animated")
                            powderrock8.classList.remove("animated")
                            powderrock9.classList.remove("animated")
                            powderrock10.classList.remove("animated")
                            mediumrock.classList.remove("animated")
                            mediumrock2.classList.remove("animated")
                            mediumrock3.classList.remove("animated")
                            additiverock.classList.remove("animated")
                            newgear1.classList.remove("animated")
                            newgear2.classList.remove("animated")
                            beakerglass.classList.remove("animated")
                            spill.classList.remove("animated")
                        }
                        powderrock10.addEventListener("animationend", restart2)
                    } else {

                        if (custominput_calc2.value >= 1.41 && custominput_calc2.value <= 12) {
                            additive_density_calc2 = custominput_calc2.value
                            volumetoretire_calc2 = voltoretire_calc2()
                            volumeneededbefore_calc2 = finalvol_calc2()
                            totalmasstoadd_calc2 = masstoadd_calc2()

                            powderrock1.classList.toggle("animated")
                            powderrock2.classList.toggle("animated")
                            powderrock3.classList.toggle("animated")
                            powderrock4.classList.toggle("animated")
                            powderrock5.classList.toggle("animated")
                            powderrock6.classList.toggle("animated")
                            powderrock7.classList.toggle("animated")
                            powderrock8.classList.toggle("animated")
                            powderrock9.classList.toggle("animated")
                            powderrock10.classList.toggle("animated")
                            mediumrock.classList.toggle("animated")
                            mediumrock2.classList.toggle("animated")
                            mediumrock3.classList.toggle("animated")
                            additiverock.classList.toggle("animated")
                            newgear1.classList.toggle("animated")
                            newgear2.classList.toggle("animated")
                            beakerglass.classList.toggle("animated")
                            spill.classList.toggle("animated")
                            fluid2.classList.toggle("animated")

                            let forcefluid2 = () => {
                                fluid2.classList.add("animated")
                            }
                            beakerglass.addEventListener("animationstart", forcefluid2)

                            let restart2 = () => {
                                powderrock1.classList.remove("animated")
                                powderrock2.classList.remove("animated")
                                powderrock3.classList.remove("animated")
                                powderrock4.classList.remove("animated")
                                powderrock5.classList.remove("animated")
                                powderrock6.classList.remove("animated")
                                powderrock7.classList.remove("animated")
                                powderrock8.classList.remove("animated")
                                powderrock9.classList.remove("animated")
                                powderrock10.classList.remove("animated")
                                mediumrock.classList.remove("animated")
                                mediumrock2.classList.remove("animated")
                                mediumrock3.classList.remove("animated")
                                additiverock.classList.remove("animated")
                                newgear1.classList.remove("animated")
                                newgear2.classList.remove("animated")
                                beakerglass.classList.remove("animated")
                                spill.classList.remove("animated")
                            }
                            powderrock10.addEventListener("animationend", restart2)


                        } else {
                            alert("Please introduce a valid density (Maximum density permitted is 12, minimum 1.41)")
                            volumetoretire_calc2 = 0
                            volumeneededbefore_calc2 = 0
                            totalmasstoadd_calc2 = 0

                        }
                    }
                }
            }
        }
    }

    // ----------Mete los resultados al DOM (con 3 decimales)-------

    showValuesInDOM_calc2()
}

button_calc2 = document.getElementById("thebutton_calc2")
button_calc2.addEventListener("click", calculate_calc2)


let densitybutton_calc2 = document.querySelectorAll(".densities_calc2")


const savedensityvalue_calc2 = (event) => {
    // Esto sirve para que si ya esta seleccionada una densidad (que tenga la clase clicked_calc2 no haga nada)
    if (event.target.classList.contains("clicked_calc2")) {

    } else {
        if (event.target.classList.contains("custom_calc2")) {
            for (let i = 0; i < densitybutton_calc2.length; i++) {
                //le quita a todos los botones la clase clicked_calc2
                densitybutton_calc2[i].classList.remove("clicked_calc2")
                //le coloca a todos su nombre
                densitybutton_calc2[i].innerHTML = densitybutton_calc2[i].dataset.label;
            }
            event.target.classList.toggle("clicked_calc2")
            custominput_calc2.classList.toggle("dontshow_calc2")
            custom_calc2.innerHTML = ""


        } else {
            // restablece todos los botones
            for (let i = 0; i < densitybutton_calc2.length; i++) {
                //le quita a todos los botones la clase clicked_calc2
                densitybutton_calc2[i].classList.remove("clicked_calc2")
                //le coloca a todos su nombre
                densitybutton_calc2[i].innerHTML = densitybutton_calc2[i].dataset.label;
            }

            // Le agrega la clase clicked_calc2 al que fue clickado nuevamente
            event.target.classList.toggle("clicked_calc2")
            //Esconde el input de custom
            custominput_calc2.classList.add("dontshow_calc2")
            // escribe el valor numerico
            event.target.innerHTML = event.target.dataset.value

            //guarda el valor para el calculo
            additive_density_calc2 = event.target.dataset.value
        }
    }
}

for (let i = 0; i < densitybutton_calc2.length; i++) {
    densitybutton_calc2[i].addEventListener('click', savedensityvalue_calc2);
}
const getValues_calc2 = () => {
    finalmudvol_calc2 = document.getElementById("finalmudvolume_calc2").value
    initialdensity_calc2 = document.getElementById("initialmuddensity_calc2").value
    enddensity_calc2 = document.getElementById("finalmuddensity_calc2").value

}
const voltoretire_calc2 = () => {
    return ((finalmudvol_calc2) * ((enddensity_calc2 - initialdensity_calc2) / (additive_density_calc2 - initialdensity_calc2)))
}
const finalvol_calc2 = () => {
    return finalmudvol_calc2 - voltoretire_calc2()
}
const masstoadd_calc2 = () => {
    return (additive_density_calc2) * (finalmudvol_calc2) * ((enddensity_calc2 - initialdensity_calc2) / (additive_density_calc2 - initialdensity_calc2))
}

const showValuesInDOM_calc2 = () => {
    firstanswer_calc2.innerHTML = volumetoretire_calc2.toFixed(3)
    secondanswer_calc2.innerHTML = volumeneededbefore_calc2.toFixed(3)
    thirdanswer_calc2.innerHTML = totalmasstoadd_calc2.toFixed(3)
}

const resetfunction_calc2 = () => {
    finalmudvolume_calc2.value = ""
    initialmuddensity_calc2.value = ""
    finalmuddensity_calc2.value = ""
    //No reseteo el valor de densidad porque se genera un problema,
    //al resetear, si se hace otra vez el calculo se muestran los resultados
    //obtenidos en el calculo anterior (esto porque al resetear volvemos a poner a
    //la barita como el material predeterminado pero no lo detecta)

    // for (let i = 0; i < densitybutton.length; i++) {
    //     //le quita a todos los botones la clase clicked_calc2
    //     densitybutton[i].classList.remove("clicked_calc2")
    //     //le coloca a todos su nombre
    //     densitybutton[i].innerHTML = densitybutton[i].dataset.label;
    // }
    // barite.classList.add("clicked_calc2")

    firstanswer_calc2.innerHTML = ""
    secondanswer_calc2.innerHTML = ""
    thirdanswer_calc2.innerHTML = ""
    powderrock1.classList.remove("animated")
    powderrock2.classList.remove("animated")
    powderrock3.classList.remove("animated")
    powderrock4.classList.remove("animated")
    powderrock5.classList.remove("animated")
    powderrock6.classList.remove("animated")
    powderrock7.classList.remove("animated")
    powderrock8.classList.remove("animated")
    powderrock9.classList.remove("animated")
    powderrock10.classList.remove("animated")
    mediumrock.classList.remove("animated")
    mediumrock2.classList.remove("animated")
    mediumrock3.classList.remove("animated")
    beakerglass.classList.remove("animated")
    spill.classList.remove("animated")
    fluid2.classList.remove("animated")
    additiverock.classList.remove("animated")
    newgear1.classList.remove("animated")
    newgear2.classList.remove("animated")


}
resetb_calc2.addEventListener("click", resetfunction_calc2)


// aqui termina la calcu 2

// Aqui hacemos animaciones --------------------------------------------
// scroll del header
let header = document.getElementById("headerfixed")

let imgfeat = document.getElementById("imgfeat")
let f1 = document.getElementById("f1")
let f2 = document.getElementById("f2")
let f3 = document.getElementById("f3")
let f4 = document.getElementById("f4")
let animatedimg = document.querySelector(".contditionimg")
let animateconditiontext = document.querySelector(".conditiontext")
let mentalmap = document.querySelector(".map")
let maptxt = document.querySelector(".maptext")
let poorimg = document.querySelector(".poorimg")
let richimg = document.querySelector(".richimg")
let additivesimg = document.querySelector(".additivesimg")
let problematic1 = document.querySelector(".densitytitle")
let problematic2 = document.querySelector(".densitytext")
let problematic3 = document.querySelector(".densitytext2")
let problematic4 = document.querySelector(".densitytext3")

// scroll del profile card
let whatsapp = document.querySelector(".whatsapp")
let linkedin = document.querySelector(".linkedin")
let telegram = document.querySelector(".telegram")
let github = document.querySelector(".github")
let mail = document.querySelector(".mail")

// scroll del logo en el header
let textlogo = document.getElementById("drillingmudmex")
let logo = document.getElementById("drillingmudmexlogo")
allscrollanimations = () => {
    if (scrollY < 45) {
        header.classList.remove("colored")
    }
    if(scrollY > 45 ) {
        header.classList.add("colored")

    }
    if (scrollY > 754) {
        imgfeat.classList.add("animated")
        f1.classList.add("animated")
        f2.classList.add("animated")
        f3.classList.add("animated")
        f4.classList.add("animated")

    }
    if (scrollY > 654) {
        textlogo.classList.add("hidden")
        logo.classList.remove("hidden")
    }
    if (scrollY <654 ) {
        textlogo.classList.remove("hidden")
        logo.classList.add("hidden")
    }
    if (scrollY > 1396) {
        animatedimg.classList.add("animated")
        animateconditiontext.classList.add("animated")
        // console.log(animateconditiontext.getBoundingClientRect().left)
    }
    if (scrollY > 1754) {

        mentalmap.classList.add("animated")
        maptxt.classList.add("animated")
    }
    if (scrollY > 2815) {
        additivesimg.classList.add("animated")
        problematic1.classList.add("animated")
        problematic2.classList.add("animated")
        problematic3.classList.add("animated")
        problematic4.classList.add("animated")
    }
    if (scrollY > 3493) {
        poorimg.classList.add("animated")
        richimg.classList.add("animated")
    }
    if (scrollY > 5047) {
        whatsapp.classList.add("animated")
        telegram.classList.add("animated")
        github.classList.add("animated")
        linkedin.classList.add("animated")
        mail.classList.add("animated")
    }
}
window.addEventListener("scroll", allscrollanimations)


// aqui comienzan las FAQS


let preguntas = document.querySelectorAll(".pregunta")

const showanswers = (event) => {

    if (event.target.nextElementSibling.classList.contains("phidden")) {
        for (let i = 0; i < preguntas.length; i++) {
            preguntas[i].nextElementSibling.classList.add("phidden")
            preguntas[i].nextElementSibling.nextElementSibling.classList.remove("phidden")
            preguntas[i].nextElementSibling.nextElementSibling.nextElementSibling.classList.add("phidden")
        }
        event.target.nextElementSibling.classList.remove("phidden")
        event.target.nextElementSibling.nextElementSibling.classList.add("phidden")
        event.target.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove("phidden")


    } else {
        for (let i = 0; i < preguntas.length; i++) {
            preguntas[i].nextElementSibling.classList.add("phidden")
            preguntas[i].nextElementSibling.nextElementSibling.classList.remove("phidden")
            preguntas[i].nextElementSibling.nextElementSibling.nextElementSibling.classList.add("phidden")
        }
    }
}

for (let i = 0; i < preguntas.length; i++) {
    preguntas[i].addEventListener("click", showanswers)
}

// esto hace que el candado tambien habra el p
let symbolclosed = document.querySelectorAll(".padlockclosed")

const openpadlock = (event) => {

    if (event.target.previousElementSibling.classList.contains("phidden")) {

        for (let i = 0; i < symbolclosed.length; i++) {
            symbolclosed[i].previousElementSibling.classList.add("phidden")
            symbolclosed[i].classList.remove("phidden")
            symbolclosed[i].nextElementSibling.classList.add("phidden")
        }

        event.target.previousElementSibling.classList.remove("phidden")
        event.target.classList.add("phidden")
        event.target.nextElementSibling.classList.remove("phidden")
    }
}

for (let i = 0; i < symbolclosed.length; i++) {
    symbolclosed[i].addEventListener("click", openpadlock)
}


let symbolopened = document.querySelectorAll(".padlockedopened")

const closedlock = (event) => {
    if (event.target.previousElementSibling.classList.contains("phidden"))
        event.target.classList.add("phidden")
        event.target.previousElementSibling.classList.remove("phidden")
        event.target.previousElementSibling.previousElementSibling.classList.add("phidden")
}

for (let i = 0; i < symbolopened.length; i++) {
    symbolopened[i].addEventListener("click", closedlock)
}




