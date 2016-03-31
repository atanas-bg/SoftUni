import java.util.HashMap;

public class HashMapUnderstand {
    public static void main(String[] args) {
        test();
    }

    public static void test() {
        int size = 16; // slot size
        Integer[] keys = { 1, 10, 16, 100, 1000, 10000, 2000000, 100000000 };
        HashMap<Integer, Object> map = new HashMap<Integer, Object>();

        for (Integer key : keys) {
            int hash = hash(key.hashCode());
            int i = indexFor(hash, size);

            map.put(key, "[" + hash + " : " + i + "]");
        }

        for (Integer key : map.keySet()) {
            System.out.printf("key: %11s, [inner hash : slot index]: %s,\n", key, map.get(key));
        }
    }

    static int hash(int h) {
        h ^= (h >>> 20) ^ (h >>> 12);
        return h ^ (h >>> 7) ^ (h >>> 4);
    }

    static int indexFor(int h, int length) {
        return h & (length - 1);
    }
}