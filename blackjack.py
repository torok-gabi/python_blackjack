import random
import functools
import operator

def osztas_lapok(pakli):    
    return random.choice(pakli)
               
def dontes(total1, total2):
    if total1 > 21 and total2 > 21:
        print("Játékos és gép is veszített!")          
    elif (total1 <= 21 and total1 > total2) or total1 <= 21 and total2 > 21:
        print("Játékos nyert!")      
    elif total1 == 21 and total2 == 21 or total1 == total2:
        print("Döntetlen!")       
    else:
        print("Vesztettél.")        
  
def kartya1(lapok):
    for i in range(len(lapok)):
        if lapok[i] == "J" or lapok[i] == "Q" or lapok[i] == "K":
            lapok[i] = 10 
        elif i == "A":
            i = 11
        else:
            i = i
    
    return lapok       
    
def jatek(pakli):
    jatekos_total = 0
    gep_total = 0
    kezben1 = []
    kezben2 = []
    i = 0
    while i < 2:
        jatekos = osztas_lapok(pakli)
        kezben1.append(jatekos)
        gep = osztas_lapok(pakli)
        kezben2.append(gep)       
        i += 1
    print(kezben1)
    print(kezben2)
    jatekos = kartya1(kezben1)
    jatekos_total = functools.reduce(operator.add,jatekos)
    print(jatekos_total)
    gep = kartya1(kezben2)
    gep_total = functools.reduce(operator.add,gep)
    print(gep_total)
    while jatekos_total < 21 and gep_total < 21 and input("Kérsz még egy lapot? i/n ") == "i" : 
        jatekos = osztas_lapok(pakli)
        kezben1.append(jatekos)
        gep = osztas_lapok(pakli)
        kezben2.append(gep) 
        print(kezben1)
        print(kezben2)
        jatekos = kartya1(kezben1)      
        jatekos_total = functools.reduce(operator.add,jatekos)
        print(jatekos_total)
        gep = kartya1(kezben2)
        gep_total = functools.reduce(operator.add,gep)
        print(gep_total)
        #dontes(total1, total2)
    dontes(jatekos_total, gep_total)
    print("Vége a játéknak!")
lapok = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"]*4

while True:
    jatek(lapok)
    break