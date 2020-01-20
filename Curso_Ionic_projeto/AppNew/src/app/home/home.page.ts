import { AlertController, ToastController, ActionSheetController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

tasks: any[]= [];

  constructor(private alertCtrl: AlertController, private toastCtrl: ToastController, private actionSheetCtrl: ActionSheetController){

  }

  async showAdd(){
    const alert = await this.alertCtrl.create({
      header: 'O que deseja anotar?',
      inputs: [
        {
          name: 'taskToDo',
          type: 'text',
          placeholder: 'Digite Algo',
        }
      ],
      
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: ()=>{
            console.log('clicked cancel')
          }
        },
        {
          text: "Adicionar",
          handler: (form) =>{
            this.add(form.taskToDo);
          }
        }



      ],


    });
    await alert.present();//apresenta na tela
  }


  async add(taskTodo: string){
    //trim() = remove os espaço vazio
    //length = tamanho do vetor
    if(taskTodo.trim().length < 1){
      const toast = await this.toastCtrl.create({
        message: "informe o que deseja fazer",
        duration: 2000,
        position: 'top',
        color: 'danger',
      });
      toast.present();//apresenta na tela
      return;
    }

    let task = {name: taskTodo, done: false};
    
    this.tasks.push(task);
    this.updateLocalStorage();

  }

  async openActions(task:any){
    const actionSheet = await this.actionSheetCtrl.create({
      header: "O que deseja fazer?",
      buttons: [{
        text: task.done ? 'Desmarcar':"Marcar",
        icon: task.done ? 'radio-button-off':'checkmark-circle',
        handler:()=>{
          task.done = !task.done;
          this.updateLocalStorage();
        }
      }
        ,{
        text:"Cancelar",
        icon:'close',
        role:'cancel',
        handler:()=>{
          console.log("Cancel clicked");
        }
      
      
      }]
    });
    await actionSheet.present();
  }

  updateLocalStorage(){
    localStorage.setItem('tasksDb', JSON.stringify(this.tasks));
  }

  delete(task:any){
    this.tasks = this.tasks.filter(taskArray => task != taskArray);
    this.updateLocalStorage();
  }


}
