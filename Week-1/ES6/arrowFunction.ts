const inventory = [

    {type:   "machine", value: 5000},


    {type:   "machine", value:  650},


    {type:      "duck", value:   10},


    {type: "furniture", value: 1200},


    {type:   "machine", value:   77}


]
//filter ra những phần tử có type là machine
let MachineValue = inventory.filter((object)=>object.type="machine")
console.log(MachineValue);
//map ra các value chứa các phần tử đã lọc
let tatolMachineValue = MachineValue.map((object)=> object.value);
console.log(tatolMachineValue);
// reduce để tính tổng
let sumValue = tatolMachineValue.reduce((prev,current)=>prev+current)
console.log(sumValue)


