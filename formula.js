function findTotal(){
    var arr = document.getElementById('a');
    var tot=0;
    for(var i=0;i<arr.length;i++){
        if(parseFloat(arr[i].value))
            tot += parseFloat(arr[i].value);
    }
    document.getElementById('ida').value = tot;
}


        const changeSummaryValues = (a,b,x,y)=>{

            let nicneed = 0

            if (y != 0){
              nicneed = (a/y*x).toFixed(2)
            }

            let kk = 33
            let c = (b/100*a).toFixed(2)
            let ka = (a*kk).toFixed(2)
            let cb = (c*kk).toFixed(2)
            


            let nicDro = (nicneed*kk).toFixed(2)
            let toida =(a-c-nicneed).toFixed(2)

            console.log(nicneed)
            document.getElementById("nicml").value = nicneed;
            document.getElementById("nicDrops").value = nicDro;
            document.getElementById("idka").value = ka;
            document.getElementById("ida").value = toida;
            document.getElementById("idc").value = c;
            document.getElementById("idcb").value = cb;


            if (nicneed <= 0) {
                document.getElementById("water1Element").setAttribute("hidden", true);
            } else {
                document.getElementById("water1Element").removeAttribute("hidden");
            }
            if (toida <= 0) {
                document.getElementById("water3Element").setAttribute("hidden", true);
            } else {
                document.getElementById("water3Element").removeAttribute("hidden");
            }
            if (c <= 0) {
                document.getElementById("water2Element").setAttribute("hidden", true);
            } else {
                document.getElementById("water2Element").removeAttribute("hidden");
            }
            updateBottle();
        }

        function myFunction() {
            const volumeInput = document.getElementById('total');
            const percentInput = document.getElementById('procent');
            const parsefutureMg = document.getElementById('futureMg');
            const parseNicoMg = document.getElementById('nicoMg')

            changeSummaryValues(volumeInput.value,percentInput.value,parsefutureMg.value,parseNicoMg.value)

            volumeInput.addEventListener('input',e=>{
                let a =e.target.value;
                let b = percentInput.value
                let y = parseNicoMg.value
                let x = parsefutureMg.value
                changeSummaryValues(a,b,x,y)
            })
            percentInput.addEventListener('input',e=>{
                let a =volumeInput.value;
                let b = e.target.value
                let y = parseNicoMg.value
                let x = parsefutureMg.value
                changeSummaryValues(a,b,x,y)
            })
            parsefutureMg.addEventListener('input',e=>{
                let a =volumeInput.value;
                let b = percentInput.value
                let x =e.target.value;
                let y = parseNicoMg.value
                changeSummaryValues(a,b,x,y)
            })
            parseNicoMg.addEventListener('input',e=>{
                let a =volumeInput.value;
                let b = percentInput.value
                let y =e.target.value;
                let x = parsefutureMg.value
                changeSummaryValues(a,b,x,y)
            })
        }

        document.addEventListener('DOMContentLoaded', function(){
           myFunction()
        });