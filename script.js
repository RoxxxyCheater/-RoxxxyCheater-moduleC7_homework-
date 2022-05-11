
export function position (inData) {
    // let inData = Number(prompt('Введите цифру от 1 до 4 включительно!'));
    let junior = 'junior', middle = 'middle', senior = 'senior', boss = 'boss';
if (inData === 1) {
    return junior;
}
else if (inData === 2) {
    return middle;
}
else if (inData === 3) {
    return senior;
}
else if (inData === 4) {
    return boss;
}else{
    return 'Work in factory forever or read question again!'
}  
}
