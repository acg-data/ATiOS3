import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Share } from 'react-native';
import { COLORS, SPACING, FONT_SIZES, APP_CONFIG } from '../utils/constants';

interface MenuItem {
  title: string;
  icon: string;
  action: () => void;
}

const MoreScreen: React.FC = () => {
  const handleWebsite = () => {
    Linking.openURL(APP_CONFIG.website);
  };
  
  const handleTwitter = () => {
    Linking.openURL('https://twitter.com/aceticket');
  };
  
  const handleFacebook = () => {
    Linking.openURL('https://facebook.com/aceticket');
  };
  
  const handleShare = async () => {
    try {
      await Share.share({
        message: `I use Ace Ticket to find great seats for sports, concerts, and theater events! Check it out at ${APP_CONFIG.website}`,
        title: 'Ace Ticket - Great Seats. Great Prices.'
      });
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleRateApp = () => {
    // In a real app, this would open the App Store
    Linking.openURL(`itms-apps://itunes.apple.com/app/id${APP_CONFIG.name}`);
  };
  
  const handleContact = () => {
    Linking.openURL(`mailto:${APP_CONFIG.supportEmail}`);
  };
  
  const menuItems: MenuItem[] = [
    { title: 'Website', icon: '🌐', action: handleWebsite },
    { title: 'Follow on Twitter', icon: '🐦', action: handleTwitter },
    { title: 'Like on Facebook', icon: '📘', action: handleFacebook },
    { title: 'Share Ace Ticket', icon: '📤', action: handleShare },
    { title: 'Rate This App', icon: '⭐', action: handleRateApp },
    { title: 'Contact Us', icon: '✉️', action: handleContact },
    { title: 'Privacy Policy', icon: '🔒', action: () => {} },
    { title: 'Terms of Service', icon: '📋', action: () => {} }
  ];
  
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>More</Text>
      </View>
      
      {/* Logo */}
      <View style={styles.logoSection}>
        <Text style={styles.logoText}>{APP_CONFIG.name}</Text>
        <Text style={styles.tagline}>Great Seats. Great Prices.</Text>
      </View>
      
      {/* Menu Items */}
      <View style={styles.menu}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.menuItem,
              index === menuItems.length - 1 && styles.menuItemLast
            ]}
            onPress={item.action}
          >
            <View style={styles.menuItemLeft}>
              <Text style={styles.menuIcon}>{item.icon}</Text>
              <Text style={styles.menuTitle}>{item.title}</Text>
            </View>
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>
        ))}
      </View>
      
      {/* App Info */}
      <View style={styles.footer}>
        <Text style={styles.version}>
          Version {APP_CONFIG.version} ({APP_CONFIG.buildNumber})
        </Text>
        <Text style={styles.copyright}>
          © 2025 Ace Ticket. All rights reserved.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background
  },
  header: {
    backgroundColor: COLORS.white,
    padding: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.divider
  },
  headerTitle: {
    fontSize: FONT_SIZES.xxl,
    color: COLORS.text,
    ...{
      fontWeight: '700' as const
    }
  },
  logoSection: {
    backgroundColor: COLORS.white,
    alignItems: 'center',
    paddingVertical: SPACING.xl
  },
  logoText: {
    fontSize: 28,
    color: COLORS.primary,
    ...{
      fontWeight: '700' as const
    }
  },
  tagline: {
    fontSize: FONT_SIZES.md,
    color: COLORS.textSecondary,
    marginTop: SPACING.xs
  },
  menu: {
    backgroundColor: COLORS.white,
    marginTop: SPACING.md
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.divider
  },
  menuItemLast: {
    borderBottomWidth: 0
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  menuIcon: {
    fontSize: 20,
    marginRight: SPACING.md,
    width: 30
  },
  menuTitle: {
    fontSize: FONT_SIZES.md,
    color: COLORS.text
  },
  menuArrow: {
    fontSize: 20,
    color: COLORS.textSecondary
  },
  footer: {
    alignItems: 'center',
    padding: SPACING.lg
  },
  version: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.textSecondary,
    marginBottom: 4
  },
  copyright: {
    fontSize: FONT_SIZES.xs,
    color: COLORS.textDisabled
  }
});

export default MoreScreen;
