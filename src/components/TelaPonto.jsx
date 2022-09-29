import React from "react";
import "../style/perfil.css";
import logopref from "../assets/logoBranca.png";
import perfilfoto from "../assets/perfil.jpg";
import {Link} from "react-router-dom";

export default () =>
    <>
        <div className="fundo">
            <div className="container">
                <img src={logopref} alt="logo" className="logo"/>
                <div className="row">
                    <div className="card-lateral  col-sm-2 card cnt">
                        <a><img src={perfilfoto}/></a>
                        <p>Olá Chico</p>
                        <div className="card">
                            <a className="form-control"> bater ponto </a>
                            <div id="resultado"></div>


                        </div>
                    </div>
                    <div className=" col-sm-10">
                        <div className=" fundoCard card text-center">
                            <h1 id="hora"></h1>
                            <h5 id="dia"></h5>
                        </div>
                        <br/>
                        <div className="fundoCard card text-center">
                            <i className="fa fa-user"></i>
                            <p className="card-header"><h5> historico do banco</h5></p>
                            <br/>
                            <p className="card-header"><h5> historico do banco</h5></p>
                             <br/>
                             <p className="card-header"><h5>historico do banco</h5></p>
                             <br/>
                             <p className="card-header"><h5>historico do banco</h5></p>

                            <div className="form-group">
                                <input type="button" className="botun" value="BATER PONTO"/>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <footer className="rodape">Copyright © 2021 DTI.
                Departamento de Tecnologia da Informação
            </footer>
        </div>

    </>
