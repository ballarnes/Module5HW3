function getUpdatedArr(data) {
    let array = [];

    return function(data) {
        if (data == null) {
            array = [];
            console.log(array);
        }
        else {
            array.push(data);
            console.log(array);
        }
    }
}

let func = getUpdatedArr();

func(3);
func(5);
func({name: "vasya"});
func();
func(4);