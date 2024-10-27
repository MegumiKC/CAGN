function listToTree(list){
    const treeMap = new Map();
    list.forEach(node=>{
        treeMap.set(node.id,{...node,children:[]})
    })
    const tree = { id: 0, name: "root", parentid: null, children: []}
    list.forEach(node=>{
        if(node.parentid===0){
            tree.children.push(treeMap.get(node.id))
        }else{
            treeMap.get(node.parentid).children.push(treeMap.get(node.id))
        }
    })
    return tree
}

const list = [
    { id: 1, name: "child1", parentid: 0 },
    { id: 2, name: "child2", parentid: 0 },
    { id: 6, name: "child2_1", parentid: 2 },
    { id: 0, name: "root", parentid: null },
    { id: 5, name: "child1_2", parentid: 1 },
    { id: 4, name: "child1_1", parentid: 1 },
    { id: 3, name: "child3", parentid: 0 },
    { id: 7, name: "child3_1", parentid: 3 },
  ];
  
  console.log(listToTree(list));