const {exec} = require('child_process');
exec("git status | grep 'modified:' | wc -l",(err,files,outerr) =>{
  if(err&&outerr)
    procress.exit(1);
  if(files>0){
    console.error(`\n\n\n!!!! => ${parseInt(files)} dosyayi guncelle\n\n`)
  }
});
