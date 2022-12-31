//print all the leaf nodes
class tr{
    constructor(data,left,right){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}
//creating a tree from the above class
//we have assign variables as below
const root = new tr(5,null,null)
const node2 = new tr(11,null,null)
const node3 = new tr(18,null,null)

root.left = node2;                    //AFTER THIS TREE LOOKS LIKE
root.right = node3;                  //           5
node3.left = new tr(14,null,null)    //        11      18
node3.right = new tr(20,null,null)   //     24   22  14   20
node2.right = new tr(22,null,null)   //   18  15
node2.left = new tr(24,null,null)
node2.left.left = new tr(18,null,null)
node2.left.right = new tr(15,null,null)

function leafNode(root){
    if(root === null) return;
    if(root.left === null && root.right === null){
        console.log(root.data)
    }
    leafNode(root.left);
    leafNode(root.right);
}


console.log("print all the leaf nodes")
leafNode(root)