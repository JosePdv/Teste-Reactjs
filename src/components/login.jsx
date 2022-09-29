import React from "react";
import "../style/login.css";
import logopref from "../assets/brasao.png";
import {Link} from 'react-router-dom';



setInterval(function () {

    let novaHora = new Date();
    let hora = novaHora.getHours();
    let minuto = novaHora.getMinutes();
    let segundo = novaHora.getSeconds();


    let dias = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    let meses = ['Janeiro', 'Fervereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro'
        , 'Dezembro'];

    let doi = novaHora.getDate();//dia do mes
    let ano = novaHora.getFullYear();//ano completo

    var str_hora = (hora < 10 ? '0' : '') + hora + ':' + (minuto < 10 ? '0' : '') + minuto + ':' + (segundo < 10 ? '0' : '') + segundo;
    var str_data = dias[novaHora.getDate()] + ', ' + (doi) + ' de ' + meses[novaHora.getMonth()] + ' de ' + ano;

    document.getElementById('hora').textContent = str_hora;
    document.getElementById('dia').textContent = str_data;
}, 1000)


//function zero(x) {
//  if (x < 10) {
//    x = '0' + x;
//} return x;
//}

export default () =>
    <>
        {/*  <div className="posicao">
            <img alt="dsds" src={logopref}/>
            <label className="label">CPF</label>
            <input  className="input" type='text' name='cpf' placeholder='000.000.000-00'></input>
            <label className="label2">Senha</label>
            <input className="input2" type='password' name='senha' ></input>
            <br/>
            <input className="botao" type='submit' value='Entrar'></input>
        </div>*/}
        <div className="back text-center">

            <div className="container">
                <div className="row justify-content-center">
                    <div className="card card-ajuste">
                        <div className="card-w-title">
                            <img src={logopref} alt="logo" className="imagem-logo"/>

                        </div>
                        <h3>Sistema de Ponto Eletrônico</h3>

                        <div id="resultado"></div>
                        <h1 id="hora"></h1>
                        <b id="dia"></b>

                        <div className="card-body align-self-center card-body-ajuste">

                            <div className="form-group">

                                <input type="text" className="form-control input-login"
                                       placeholder="Digite seu email do zimbra"/>
                            </div>

                            <div className="form-group">

                                <input type="password" className="form-control input-login"
                                       placeholder="Digite sua senha"/>
                            </div>

                            <div className="form-group">
                                <Link to="/TelaPonto">

                                    <input type="button" className="form-control btn-entrar" value="ENTRAR"/>

                                </Link>
                                <label className="label-password">esqueceu sua senha ?</label>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>

    </>
