para baixar dependencias rodar use python install_dependencies.py
para rodar o projeto user npx tsc 
depois use ./dist/index.js

descompacte o mongosh, entre nele, depois em bin, execute o mongosh.exe
dentro dele digite: mongodb://127.0.0.1:27017/ (isso se esse for o caminho do seu banco de dados, nesse projeto é ent use ele msm)
depois de executar digite: use devweb
para ver a coleção frutas(ou o nome da coleção que você der): db.frutas.find().pretty()

para saber onde vc tem q alterar para mudar o nome da coleção (banco de dados) de frutas pra outra coisa vá em frutas controller e troque
            const frutas = db.collection("frutas");
            para qualquer outra coisa
            const frutas = db.collection("bomdiaissoehumbancodedados");

mesma coisa para o nome do banco q é devweb
            const db = conn.db("devweb");
            poderia ser
            const db = conn.db("naoaguentomaisisso");


agora basta vc alterar o nome dos arquivos, o modelo do banco de dados (arquivo em model) e o service

a, o zip do mongosh ta aq tbm

boa sorte!