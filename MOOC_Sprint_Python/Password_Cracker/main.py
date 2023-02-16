from tkinter import *
import random

root = Tk()
root.title("Brute Force Password Cracker")
root.geometry("650x600")
root.config(background="#91D8E4")


def crack_password_using_random():
    password = enter_text.get()

    password_guess = ""
    characters = "0123456789abcdefghijklmnoprstuvwxyz"
    characters_list = list(characters)

    while password_guess != password:
        password_guess = random.choices(characters_list, k=len(password))
        password_guess = "".join(password_guess)

    cp = Label(root, text="Your password is :", font=("poppins", 20), bg="#91D8E4", fg="#460C68")
    cp.place(x=100, y=400)
    cracked_password.config(text=password_guess)


heading = Label(root, text="Brute Force Password Cracker", font=("Comic Sans MS", 20, "bold"), bg="#91D8E4",
                fg="#460C68")
heading.pack(pady=(50, 0))

explanation_text_string = "Enter your password below, the program will try to guess it,\n the longer the password " \
                          "the longer it will take to crack it.\n"
explanation_text = Label(root, text=explanation_text_string, font=("Comic Sans MS", 12, "bold"), bg="#91D8E4",
                         fg="#460C68")
explanation_text.pack(pady=(50, 0))

enter_text = Entry(root, justify="center", width=30, font=("Comic Sans MS", 20, "bold"), bg="white", border=2)
enter_text.pack(pady=10)
enter_text.focus()

Button = Button(root, text="Crack!", font=("Comic Sans MS", 20, "bold"), fg="white", bg="#758ED9",
                command=crack_password_using_random)
Button.pack()

cracked_password = Label(root, font=("Comic Sans MS", 20), bg="#91D8E4", fg="#460C68")
cracked_password.place(x=350, y=400)
root.mainloop()
