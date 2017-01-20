import tkinter

from tkinter import constants

tk = tkinter.Tk()
"""Construct a frame widget with the parent MASTER.

        Valid resource names: background, bd, bg, borderwidth, class,
        colormap, container, cursor, height, highlightbackground,
        highlightcolor, highlightthickness, relief, takefocus, visual, width."""
# visual - best, directcolor, grayscale, greyscale, pseudocolor, staticcolor, staticgray, staticgrey, truecolor, or default
frame = tkinter.Frame(tk, relief=constants.RIDGE, background='white', highlightthickness=1,
                      highlightbackground='black', highlightcolor='blue', borderwidth=1)
frame.pack(fill=constants.BOTH, expand=1, ipadx=50, ipady=50)
label = tkinter.Label(frame, text="Weather in Sofia", font=5, background='white')
label.pack(anchor='center', fill=constants.X, expand=1)
button = tkinter.Button(frame, activebackground='blue', text="Изход", command=tk.destroy(), background='lightblue')
button.pack(side=constants.BOTTOM)
tk.mainloop()
