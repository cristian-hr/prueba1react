import "./Memes.css"


export default function Memes () {
    var ind = 0
    var arr = [
        "https://www.infobae.com/new-resizer/9sHRURhaNBkEFM-MxNwJiYMqvh0=/420x236/filters:format(jpg):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/GFSVCD6WKNETBBTSBNBTIPHZIQ.jpg",
        "https://preview.redd.it/hc6pw2aywuh61.jpg?width=640&crop=smart&auto=webp&s=f85a27cb6c7709f067a9a79df81c85533bb5ac52",
        "https://preview.redd.it/r92tydgdcvh61.jpg?width=640&crop=smart&auto=webp&s=edfcc581924ebc24da2b0af0f7439b078bcf61e5",
        "https://preview.redd.it/ydnrwh0zzuh61.png?width=640&crop=smart&auto=webp&s=96290494ba6081c9bc0c6df4d7e10f5d4b65c712"
    ];
    
    function Next () {
        var img = document.getElementById("imgM");
        if(ind>=arr.length-1){
            ind = 0
            img.src = arr[ind]
        }
        else {
            ind = ind + 1
            img.src = arr[ind]
        }
        console.log(ind) 
    }

    function Prev () {
        var img = document.getElementById("imgM");
        if(ind==0){
            ind = arr.length-1
            img.src = arr[ind]
        }
        else {
            ind = ind - 1
            img.src = arr[ind]
        }
        console.log(ind) 
    }

    return (            
        <div className="meme">
            <div>
            <img id="imgM" src={arr[ind]} alt=""/> 
            </div>
            <div className="btnM">
            <input type="submit" className="btnM2" onClick={Prev} value="Prev"></input>  
            <input type="submit" className="btnM2" onClick={Next} value="Next"></input>
            </div>              
        </div>
    )
}