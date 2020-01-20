import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-componente-alert',
  templateUrl: './componente-alert.page.html',
  styleUrls: ['./componente-alert.page.scss'],
})
export class ComponenteAlertPage implements OnInit {

  constructor(private alertaCtrl: AlertController) { }

  ngOnInit() {
  }

  async abrirAlertSimples(){
    let alerta = await this.alertaCtrl.create({
        header: "Alert Simples",
        subHeader: "Sub Header",
        message: "Essa é uma mensagem com alerta simples",
        buttons: ['OK']
    });
    await alerta.present();
  }

  async abrirAlertMultiplo(){
    let alerta = await this.alertaCtrl.create({
      header: "Alert Multiplo",
      subHeader: "Sub Header",
      message: "Essa é uma mensagem com alerta múltiplo",
      buttons: ['Cancelar', 'Abrir Modal','Excluir']
  });
    await alerta.present();
  }

  async abrirAlertConfirme(){
    let alerta = await this.alertaCtrl.create({
      header: "Confirmação",
      message: "Deseja cancelar o pedido <b>XPTO</b>?",
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          cssClass: "secondary",
          handler : () =>{
            console.log("Pedido Cancelado: XPTO")
          }
        },
        
        {
          text: "Pagar",
          handler : () =>{
            console.log("Pago com Sucesso")
          }
        },
      ]
  });
    await alerta.present();
  }


  async abrirPrompt(){
    let alerta = await this.alertaCtrl.create({
      header: "Acesso Restrito",
      inputs:[
        {
          name: 'login',
          type: 'text',
          placeholder: 'informe seu login',
        },
        {
          name: 'senha',
          type: 'password',
          placeholder: 'informe seu senha',
        }  
      ],

      buttons: [
        {
          text: "Novo",
          cssClass: "secondary",
          role: 'cancel',
          handler: ()=>{
            console.log("Aqui vai abrir a tela de cadastro de novos usuários")
          }
        },
        {
          text: "Entrar",
          handler: (data)=>{
            console.log("Dados->", data)
          }
        }
      ]
    });
  await alerta.present();
  }

  async abrirRadio(){
    let alerta = await this.alertaCtrl.create({
      header: "Radio",
      inputs: [
        {
          name: 'Radio1',
          type: 'radio',
          label: 'Radio 1',
          value: 'value1',
          checked: true
        },
        {
          name: 'Radio2',
          type: 'radio',
          label: 'Radio 2',
          value: 'value2',
        },
        {
          name: 'Radio3',
          type: 'radio',
          label: 'Radio 3',
          value: 'value3',
        },
        {
          name: 'Radio4',
          type: 'radio',
          label: 'Radio 4',
          value: 'value4',
        }   
      ],

      buttons: [
        {
          text: "Cancel",
          cssClass: "secondary",
          role: 'cancel',
          handler: ()=>{
            console.log("Confirma Cancel")
          }
        },
        {
          text: "Ok",
          handler: (data)=>{
            console.log("Confirma Ok",data)
          }
        },
      ]
    });
  await alerta.present();
  }

  async abrirCheckBox(){
    let alerta = await this.alertaCtrl.create({
      header: "CheckBox",
      inputs: [
        {
          name: 'checkBox1',
          type: 'checkbox',
          label: 'CheckBox 1',
          value: 'value1',
          checked: true
        },
        {
          name: 'checkBox2',
          type: 'checkbox',
          label: 'CheckBox 2',
          value: 'value2',
        },
        {
          name: 'checkBox3',
          type: 'checkbox',
          label: 'CheckBox 3',
          value: 'value3',
        },
        {
          name: 'checkBox4',
          type: 'checkbox',
          label: 'CheckBox 4',
          value: 'value4',
        },
        {
          name: 'checkBox5',
          type: 'checkbox',
          label: 'CheckBox 5',
          value: 'value5',
        },
        {
          name: 'checkBox6',
          type: 'checkbox',
          label: 'CheckBox 6',
          value: 'value6',
        },
          
      ],

      buttons: [
        {
          text: "Cancel",
          cssClass: "secondary",
          role: 'cancel',
          handler: ()=>{
            console.log("Confirma Cancel")
          }
        },
        {
          text: "Ok",
          handler: (data)=>{
            console.log("Confirma Ok",data)
          }
        },
      ]
    });
  await alerta.present();
  }
  

}
