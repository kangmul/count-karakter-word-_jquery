// let inputValues = $('#elementCaracter').val('asd asdasd');
// console.log(inputValues.trim);
$('#elementCaracter').on('keyup', function(){
    let inputValues = $('#elementCaracter').val();
    let jumlahkarakter = inputValues.length;
    let jumlahkata = inputValues.trim().split(" ").length;
    $('#result').html('Jumlah karakter : ' + jumlahkarakter + ' Jumlah kata : ' + jumlahkata );

    // $('#result').html('Jumlah karakter : Jumlah kata : ' + inputValues.match(/S).length );

    
});