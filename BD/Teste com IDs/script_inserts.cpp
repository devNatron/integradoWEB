#include <iostream>
#include <fstream>
#include <cstdlib>
#include <ctime> 

using namespace std;

int aleatorio(int min, int max)
{
  static int Init = 0;
  int rc;
  
  if (Init == 0)
  {
    srand(time(NULL));
    Init = 1;
  }

  rc = (rand() % (max - min + 1) + min);
  
  return (rc);
}


string area(int i){
	string r;
	
	switch(i){
	case 1: r = "Ciências Exatas e da Terra";
	break;
	case 2: r = "Ciências Biológicas";
	break;
	case 3: r = "Engenharias";
	break;
	case 4: r = "Ciências da Saúde";
	break;
	case 5: r = "Ciências Agrárias";
	break;
	case 6: r = "Ciências Sociais Aplicadas";
	break;
	case 7: r = "Ciências Humanas";
	break;
	case 8: r = "Linguística, Letras e Artes";
	break;
	case 9: r = "Outros";
	break;
	}
	
	return r;
	
}

string estado(int i){
	
	string r;
	
	switch(i){
	case 1: r = "AC";
	break;
	case 2: r = "AL";
	break;
	case 3: r = "AP";
	break;
	case 4: r = "AM";
	break;
	case 5: r = "BA";
	break;
	case 6: r = "CE";
	break;
	case 7: r = "DF";
	break;
	case 8: r = "ES";
	break;
	case 9: r = "GO";
	break;
	case 10: r = "MA";
	break;
	case 11: r = "MT";
	break;
	case 12: r = "MS";
	break;
	case 13: r = "MG";
	break;
	case 14: r = "PA";
	break;
	case 15: r = "PB";
	break;
	case 16: r = "PR";
	break;
	case 17: r = "PE";
	break;
	case 18: r = "PI";
	break;
	case 19: r = "RJ";
	break;
	case 20: r = "RN";
	break;
	case 21: r = "RS";
	break;
	case 22: r = "RO";
	break;
	case 23: r = "RR";
	break;
	case 24: r = "SC";
	break;
	case 25: r = "SP";
	break;
	case 26: r = "SE";
	break;
	case 27: r = "TO";
	break;
	}
	
	return r;
}

string grau(int i){
	
	string r;
	
	if(i < 5)
		r = "Bacharelado";
	else if(i >= 5 && i < 9)
		r = "Licenciatura";
	else if(i == 9 || i == 10)
		r = "Mestrado";
	else if(i == 11)
		r = "Doutorado";
	else
		r = "Tecnólogo";
	
	return r;
}

string turno(int i){
	
	string r;
	
	switch (i){
	case 1: r = "Matutino";
	break;
	case 2: r = "Integral";
	break;
	case 3: r = "Noturno";
	break;
	case 4: r = "Vespertino";	
	break;
	}
	return r;
}

int main()
{
	ofstream f_out("DML.sql");
	string insti, primeira, segunda, aux1, aux2, aux3, aux4, aux5, aux6, aux7, aux8, aux9;

	//sigla, nome, natureza, estado
	primeira = "INSERT INTO instituicao (sigla, nome_instituicao, natureza_administrativa, nota_IGC) VALUES (";
	segunda = ");\n";
	for(int i = 0; i < 10000; i++){
		aux1 = "'UN" + to_string(i+1) + "',"; 
		aux2 = " 'Universidade brasileira " + to_string(i+1) + "', ";
		if(aleatorio(1, 2) == 1)
			aux3 = "'Pública', ";
		else
			aux3 = "'Privada', ";
		aux4 = to_string(aleatorio(0, 5));
		
		insti = primeira + aux1 + aux2 + aux3 + aux4 + segunda;
		f_out << insti;
	}
	

	for(int i = 0; i < 100000; i++){
		primeira = "INSERT INTO campus (nome_campus, estado, cidade, id_instituicao) VALUES (";
		aux2 = "'Campus Universitário " + to_string(i+1) + "', '";
		aux4 = estado(aleatorio(1, 27)) + "', ";
		aux3 = "'Cidade brasileira " + to_string(i+1) + "', ";
		if(i < 10000)
			aux1 = "'" + to_string(i+1) + "'";
		else
			aux1 = "'" + to_string(aleatorio(1,10000)) + "'";
			
		insti = primeira + aux2 + aux4 + aux3 + aux1 + segunda;
		f_out << insti;
	

	primeira = "INSERT INTO curso (nome_curso, area, nota_enade, grau, turno, duracao, ano_criacao, id_campus) VALUES (";
		aux2 = "'Curso Universitário " + to_string(i+1) + "', '";
		aux8 = area(aleatorio(1,9)) + "', ";
		aux9 = to_string(aleatorio(0,5)) + ", '";
		aux3 = grau(aleatorio(1,15)) + "', '";
		aux4 = turno(aleatorio(1,4)) + "', ";
		aux5 = to_string(aleatorio(1,12));
		aux6 = ", " + to_string(aleatorio(1981, 2019));
		aux7 = ", '" + to_string(i+1) + "'";
	
		insti = primeira + aux2 + aux8 + aux9 + aux3 + aux4 + aux5 + aux6 + aux7 + segunda;
		f_out << insti;
	}
	
	 f_out.close();
	 
    return 0;
}
