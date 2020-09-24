import React, {Component} from "react";  
import $ from "jquery";

class daftarbelanja extends Component {  
constructor(){  
super();  
this.state = {  
 siswa : [  
{id: "1",  item: "Kentang"},  
 {id: "2",  item: "Wortel"},  
 {id: "3",  item: "Bawang"},  
],  
 id: "",  
 item: "",
 action: "" 
 } 
    }  
    bind = (event) => {  
        this.setState({[event.target.name]: event.target.value});  
        }  
        Add = () => {   
            this.setState({  
            id: "",  
             item: "",  
              action: "insert"  
            });
        }
        Edit = (item) => {  
            this.setState({  
            id: item.id,    
           item: item.item,  
           action: "update"  
           });  
           }  
            
               Drop = (index) => {  
           // temp digunakan untuk menyimpan sementara  
            // data array siswa  
           let temp = this.state.siswa;  
           
            // menghapus data pada index yang dihapus  
            temp.splice(index,1);  
            
           // array siswa diupdate dengan nilai data temp  
           this.setState({siswa: temp});  
               } 
       
render(){  
return (  
    <div class="col=md-9 p-5 pt2">
    <h3>Daftar Belanja</h3>
<div className="container"> 
{ /* generate list */ }  
<ul className="list-group">  
{this.state.siswa.map((item,index) => {  
return (  
<li className="list-group-item" key={index}>    
 <h6>ID: {item.id}</h6>  
 <h6>Item: {item.item}</h6>  
 
<button className="btn btn-sm btn-primary m-1" onClick={() => this.Edit(item)}  
data-toggle="modal" data-target="#modal">  
 Edit  
</button>  
 <button className="btn btn-sm btn-danger m-1" onClick={() => this.Drop(index)}>  
 Hapus  
 </button>  
</li>  
);  
 })}  
</ul>  
<button className="btn btn-sm btn-success m-3" onClick={this.Add}  
 data-toggle="modal" data-target="#modal">  
Tambah Data  
</button>  

 { /* elemen form modal */ }  
 <div className="modal fade" id="modal">  
<div className="modal-dialog">  
 <div className="modal-content">  
<div className="modal-header bg-success text-white">  
<h5>Daftar Belanja</h5>  
</div>  
<form onSubmit={this.SaveSiswa}>  
<div className="modal-body">  
ID  
 <input type="text" name="id" className="form-control" onChange={this.bind}  
 value={this.state.id} />   
 Item  
<input type="text" name="item" className="form-control" onChange={this.bind}  
 value={this.state.item} />  
</div>  
<div className="modal-footer">
<button type="submit" className="btn btn-primary">  
Simpan  
 
 </button>  
</div>  
</form>  
</div>  
 </div>  
</div>  
 </div>  
 </div>
 );  
 }  
          
    SaveSiswa = (event) =>{  
    event.preventDefault();  
    // temp digunakan untuk menyimpan sementara  
    // data array siswa  
    let temp = this.state.siswa;  
          
    if (this.state.action === "insert") {  
    // temp akan ditambahkan dengan data siswa yang baru  
    // sesuai dengan data yang dimasukkan pada form  
    temp.push({  
     id: this.state.id,   
     item: this.state.item  
    });  
    } else if (this.state.action === "update") {  
    // mencari index data yang akan diubah  
    let index = temp.findIndex(item => item.id === this.state.id);  
    // mengubah data array sesuai dengan masukan pada form    
    temp[index].item = this.state.item;  
    }  
      
     
    // array siswa diupdate dengan nilai data temp  
    this.setState({siswa: temp});  
      
    // menutup modal  
     $("#modal").modal('hide');  
    }  
        
     
}
export default daftarbelanja;