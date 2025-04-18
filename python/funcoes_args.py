def soma (*args):
    resultado = 0
    for num in args:
        if type(num) != int and type(num) != float:
            continue
        else:
            resultado += num
    return resultado

soma_num = soma(1,2,3,4,5,'a', False, 1.0, (9,5), [8,9])

print(soma_num)