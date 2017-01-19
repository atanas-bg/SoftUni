using System;

namespace DataStructures
{
    public class CustomStack<T>
    {
        private const int DefaultCapacity = 16;
        private T[] items;

        public CustomStack(uint capacity = DefaultCapacity)
        {
            this.items = new T[capacity];
            this.Count = 0;
            this.Capacity = capacity;
        }

        public int Count { get; private set; }

        public uint Capacity { get; private set; }

        public void Push(T item)
        {
            if (this.Count == this.Capacity)
            {
                this.Resize();
            }

            this.items[this.Count] = item;
            this.Count++;
        }

        private void Resize()
        {
            var newArray = new T[this.Capacity * 2];
            Array.Copy(this.items, newArray, this.Capacity);
            this.items = newArray;
            this.Capacity = 2 * this.Capacity;
        }

        public T Pop()
        {
            this.ValidateStackIsEmpty();

            int lastItemIndex = this.Count - 1;
            var item = this.items[lastItemIndex];

            this.items[lastItemIndex] = default(T);
            this.Count--;

            return item;
        }

        private void ValidateStackIsEmpty()
        {
            if (this.Count == 0)
            {
                throw new InvalidOperationException("The stack is empty.");
            }
        }

        public bool Contains(T item)
        {
            for (int index = 0; index < this.Count; index++)
            {
                if (this.items[index].Equals(item))
                {
                    return true;
                }
            }

            return false;
        }

        public void Clear()
        {
            Array.Clear(this.items, 0, this.Count - 1);
            this.Count = 0;
        }

        public T Peek()
        {
            this.ValidateStackIsEmpty();
            return this.items[this.Count - 1];
        }
    }
}
