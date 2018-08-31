// import '../styles/index.scss';

// Sự khác nhau giữa Function thông thường và Arrow Function
// Function thông thường
let regularObj = function() {
    this.name = 'An Vu';
    return {
      name: 'John',
      getName: function() {
        // this sẽ bị ghi đè vì this lúc này thuộc về Obj được trả về
        return this.name;
      }
    };
  };
  console.log('regularObj: ' + regularObj().getName());
  
  // Arrow Function
  let arrowObj = function() {
    this.name = 'An Vu';
    return {
      name: 'John',
      getName: () => {
        // this này không bị ghi đè bởi Obj mà vẫn giữ được this của hàm cha
        return this.name;
      }
    };
  };
  console.log('arrowObj: ' + arrowObj().getName());