import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Svg, { Path, G, Rect } from 'react-native-svg';
import { COLORS, SPACING, FONT_SIZES, FONT_WEIGHTS, BORDER_RADIUS } from '../../utils/constants';

interface StadiumMapProps {
    onSectionSelect: (section: string | null) => void;
    selectedSection: string | null;
    venueType?: 'arena' | 'stadium'; // 'arena' for Celtics/Bruins, 'stadium' for Sox/Pats
}

const StadiumMap: React.FC<StadiumMapProps> = ({ onSectionSelect, selectedSection, venueType = 'arena' }) => {

    const sections = [
        { id: 'floor', label: 'Parquet/Floor', color: '#fbbf24', path: "M50,70 L150,70 L150,130 L50,130 Z" },
        { id: 'loge_lower', label: 'Loge Lower', color: '#3b82f6', path: "M40,60 L160,60 L160,140 L40,140 L40,60 M50,70 L50,130 L150,130 L150,70 L50,70" },
        { id: 'loge_upper', label: 'Loge Upper', color: '#60a5fa', path: "M30,50 L170,50 L170,150 L30,150 L30,50 M40,60 L40,140 L160,140 L160,60 L40,60" },
        { id: 'balcony', label: 'Balcony', color: '#94a3b8', path: "M10,30 L190,30 L190,170 L10,170 L10,30 M30,50 L30,150 L170,150 L170,50 L30,50" },
    ];

    const handlePress = (id: string) => {
        if (selectedSection === id) {
            onSectionSelect(null);
        } else {
            onSectionSelect(id);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.mapContainer}>
                <Svg viewBox="0 0 200 200" width="100%" height="100%">
                    {/* Background Field/Court */}
                    <Rect x="60" y="80" width="80" height="40" fill="#fef3c7" rx="2" opacity={0.3} />

                    {sections.map((section) => (
                        <G key={section.id} onPress={() => handlePress(section.id)}>
                            <Path
                                d={section.path}
                                fill={selectedSection === section.id ? section.color : '#e2e8f0'}
                                stroke={selectedSection === section.id ? '#1e293b' : '#94a3b8'}
                                strokeWidth={selectedSection === section.id ? "2" : "1"}
                                opacity={selectedSection && selectedSection !== section.id ? 0.3 : 1}
                            />
                        </G>
                    ))}
                </Svg>
            </View>

            {/* Legend */}
            <View style={styles.legend}>
                {sections.map((section) => (
                    <TouchableOpacity
                        key={section.id}
                        onPress={() => handlePress(section.id)}
                        style={[
                            styles.legendButton,
                            selectedSection === section.id && styles.legendButtonSelected
                        ]}
                    >
                        <Text style={[
                            styles.legendText,
                            selectedSection === section.id && styles.legendTextSelected
                        ]}>
                            {section.label}
                        </Text>
                    </TouchableOpacity>
                ))}
                {selectedSection && (
                    <TouchableOpacity
                        onPress={() => onSectionSelect(null)}
                        style={styles.clearButton}
                    >
                        <Text style={styles.clearText}>Clear Filter</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(155, 154, 154, 0.1)',
        borderRadius: 24,
        padding: SPACING.md,
        borderWidth: 1,
        borderColor: COLORS.divider,
    },
    mapContainer: {
        width: '100%',
        aspectRatio: 1,
        maxHeight: 300,
    },
    legend: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: SPACING.lg,
        gap: SPACING.xs,
    },
    legendButton: {
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.xs,
        borderRadius: BORDER_RADIUS.round,
        borderWidth: 1,
        borderColor: COLORS.divider,
        backgroundColor: COLORS.surface,
    },
    legendButtonSelected: {
        backgroundColor: COLORS.primary,
        borderColor: COLORS.primary,
    },
    legendText: {
        fontSize: 10,
        fontWeight: FONT_WEIGHTS.bold,
        color: COLORS.textSecondary,
    },
    legendTextSelected: {
        color: COLORS.white,
    },
    clearButton: {
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.xs,
        borderRadius: BORDER_RADIUS.round,
        backgroundColor: 'rgba(209, 18, 38, 0.1)',
        borderWidth: 1,
        borderColor: 'rgba(209, 18, 38, 0.2)',
    },
    clearText: {
        fontSize: 10,
        fontWeight: FONT_WEIGHTS.bold,
        color: COLORS.error,
    },
});

export default StadiumMap;
