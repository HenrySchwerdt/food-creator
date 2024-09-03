import dynamic from 'next/dynamic';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

interface ShoppingItem {
    name: string;
    price: number;
    quantity: string;
    origin: string;
}

interface ShoppingListProps {
    list: {
        total: number;
        items: ShoppingItem[];
    };
}

const styles = StyleSheet.create({
    page: {
        padding: 20,
        fontSize: 10,  // Reduce font size
        flexDirection: 'column',
        justifyContent: 'space-between', // Distribute space
    },
    title: {
        fontSize: 16, // Adjust title font size
        textAlign: 'center',
        marginBottom: 10,
        fontWeight: 'bold',
    },
    listContainer: {
        flex: 1,  // Ensure this section grows to fill the available space
        overflow: 'hidden',  // Prevent content from overflowing
    },
    itemContainer: {
        borderBottom: '1px solid #ddd',
        marginBottom: 5,
        paddingBottom: 5,
        flexDirection: 'row',  // Use flexbox to position elements
        justifyContent: 'space-between',
    },
    itemName: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    itemDetails: {
        fontSize: 10,
        color: '#555',
    },
    itemPrice: {
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'right',
    },
    total: {
        marginTop: 10,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'right',
    },
});

function ShoppingListPDF({ list }: ShoppingListProps) {
    return (
        <Document>
            <Page style={styles.page}>
                <Text style={styles.title}>Einkaufsliste</Text>
                <View style={styles.listContainer}>
                    {list.items.map((item, index) => (
                        <View key={index} style={styles.itemContainer}>
                            <View>
                                <Text style={styles.itemName}>{item.name}</Text>
                                <Text style={styles.itemDetails}>
                                    {item.quantity} - {item.origin}
                                </Text>
                            </View>
                            <Text style={styles.itemPrice}>{item.price.toFixed(2)} €</Text>
                        </View>
                    ))}
                </View>
                <Text style={styles.total}>Gesamt: {list.total.toFixed(2)} €</Text>
            </Page>
        </Document>
    );
}
const PDFDownloadLink = dynamic(
    () => import('@react-pdf/renderer').then(mod => mod.PDFDownloadLink),
    { ssr: false }
);

export const ShoppingListPDFDownload = ({ list }: ShoppingListProps) => {
    return (
        <div className="text-center mt-6">
            <PDFDownloadLink
                document={<ShoppingListPDF list={list} />}
                fileName="einkaufsliste.pdf"
                className="text-blue-500 hover:underline"
            >
                {({ loading }) => (loading ? 'Generiere PDF...' : 'Download als PDF')}
            </PDFDownloadLink>
        </div>
    );
};
